const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const RootQueryType = require('./queries');
const RootMutationType = require('./mutations');

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

const GraphQLServer = graphqlHTTP({
  schema,
  graphiql: true,
});

module.exports = GraphQLServer;
