import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_UPCOMING_MISSION } from "./queries";

export const apolloClient = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class SpaceService {
  async getUpMission(limit = 4) {
    try {
      const response = await apolloClient.query({
        query: GET_UPCOMING_MISSION,
        variables: { limit },
      });
      if (!response || !response.data) throw new Error("Could not fetch rockets")
      return response.data.launchesUpcoming
    } catch (error) {
      throw error
    }
  }
}

export default new SpaceService()