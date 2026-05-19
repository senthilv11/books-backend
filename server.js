import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { typeDefs } from './schema/typeDefs.js';
import { resolvers } from './schema/resolvers.js';

const MONGO_URI = 'mongodb://localhost:27017/graphql_books';
const PORT = 4000;

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

app.use(
  '/graphql',
  cors({ origin: 'http://localhost:3000' }),
  bodyParser.json(),
  expressMiddleware(server)
);

await mongoose.connect(MONGO_URI);
console.log('MongoDB connected');

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
