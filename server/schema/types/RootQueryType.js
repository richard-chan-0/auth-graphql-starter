const { GraphQLID } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
    },
  },
});

module.exports = RootQueryType;
