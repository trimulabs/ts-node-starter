import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './resolvers';
import schema from './schema';
import path from 'path';

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  introspection: true,
  context: ({ req }) => req,
  playground: true,
});

server.applyMiddleware({ app });
const port = 4000;
app.listen(port, () => console.info(`Server started on port ${port}`));