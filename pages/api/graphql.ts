import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";


const apolloServer = new ApolloServer({ typeDefs, resolvers});


const startserver = apolloServer.start();



export default async function handler(req, res) {
  await startserver;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })
}