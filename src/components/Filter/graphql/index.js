import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ROCKETS } from "./queries";

export const apolloCliente = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class SpaceService {
  async getRockets(limit = 10) {
    try {
      const response = await apolloCliente.query({
        query: GET_ROCKETS,
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