import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { ApolloServer } from 'apollo-server-express';

import models from './models';

const typeDefs = `
    type test {
        message: String!
    }
    type Query {
        printTest(name: String!): Test
    }
`;

// Resolvers
const resolvers = {
  Query: {
    printTest: (_: any, args: any): any => ({
      message: `?? ${args.name || 'print'}`,
    }),
  },
};

// Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Apollo server
const ApolloServer = new ApolloServer({
  schema,
  context: {
    models,
  },
});

const alter = true;
const force = false;

models.sequlize.sync({ alter, force }).then(() => {
  // eslint-disable-next-line no-console
  ApolloServer.listen(5000).then(({ url }) => console.log(`Running on ${url}`));
});
