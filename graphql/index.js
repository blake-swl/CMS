
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import cors from 'cors';

import models from './models';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: 
  { models,
    user: {
      id: 1
    }
   },
})

const app = express();
const PORT = 8081;

app.use(cors("*"));

server.applyMiddleware({ app });

models.sequelize.sync().then(() => {
  app.listen({ port: PORT }, () => 
    console.log(`Server ready at http://localhost:8081${server.graphqlPath}`)
  );
})
