const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = require("./types/UserType");
const AuthService = require("../services/auth");

/**
 * Mutation object responsible for holding all mutations
 *
 * resolve method takes in a context object (express request object for http requests)
 */
const Mutation = new GraphQLObjectType({
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

        return AuthService.signup({
          email,
          password,
          req,
        });
      },
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, context) {
        const { user } = context;
        context.logout();
        return user;
      },
    },
    login: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args, req) {
        const { email, password } = args;
        return AuthService.login({
          email,
          password,
          req,
        });
      },
    },
  },
});

module.exports = Mutation;
