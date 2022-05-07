const { GraphQLID } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLID,
    },
  },
});

module.exports = RootQueryType;
