import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://apollo-movie-server.herokuapp.com",
  cache: new InMemoryCache(),
});

// uri: "https://movieql2.vezrcel.app",
export default client;