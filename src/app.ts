import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from "http";
import schema from './graphql/schema';

const PORT = 4000;

async function startApolloServer() {
   const app = express();
   const httpServer = http.createServer(app);


   const apolloServer = new ApolloServer({
      schema,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
   });

   await apolloServer.start();
   apolloServer.applyMiddleware({ app });

   await new Promise<void>((resolve) =>
      httpServer.listen({ port: PORT }, resolve)
   );

   console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`);

}

startApolloServer()