import { ApolloServer } from 'apollo-server';
import Schema from './schema';
import './config/database';

const server = new ApolloServer(Schema);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
