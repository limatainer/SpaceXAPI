import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_SPACE_MISSION } from "./queries";

export const apolloClient = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class SpaceService {
  async getSpaceMission(limit = 4) {
    try {
      const response = await apolloClient.query({
        query: GET_SPACE_MISSION,
        variables: { limit },
      });
      if (!response || !response.data) throw new Error("Could not fetch rockets")
      return response.data.launchesPast
    } catch (error) {
      throw error
    }
  }
}

export default new SpaceService()