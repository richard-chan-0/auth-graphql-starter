const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = require("./types/user_type");
const AuthService = require("../services/auth");

/**
 * Mutation object responsible for holding all mutations
 *
 * resolve method takes in a context object (express request object for http requests)
 */
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args, context) {
        const { email, password } = args;
        // it is convention to abbreviate context or request to simply req
        const req = context;
        AuthService.signup({
          email,
          password,
          req,
        });
      },
    },
  },
});

module.exports = mutation;
