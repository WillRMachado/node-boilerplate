// const userPostgree = require('../app/models/User');
// const userMongo = require('../app/schemas/User');
const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const routes = express.Router();
const { schema } = require('./graphql/schemas')
const { root } = require('./graphql/resolvers')
var { buildSchema } = require('graphql');

const { graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString, } = require('graphql')


const rootOLD = {
    quoteOfTheDay: () => {
        return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
    },
    random: () => {
        return Math.random();
    },
    rollThreeDice: () => {
        return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
    },
    rollDice: ({ numDice, numSides }) => {
        var output = [];
        for (var i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)));
        }
        return output;
    }
};





const schemaOLD = buildSchema(`
type Query {
  quoteOfTheDay: String
  random: Float!
  rollThreeDice: [Int]
  rollDice(numDice: Int!, numSides: Int): [Int]
}
`)



// routes.use('/graphql', (req: express.Request, res: express.Response) => {
routes.use('/graphql', (req: any, res: any) => {
    // Creates a GraphQLHTTP per request




    graphqlHTTP({
        schema: schema,
        graphiql: true,
        rootValue: root,
        // schema: Schema.get(),
        // rootValue: {
        //     message: () => 'Hello World!'
        // },
        // context: new Context(
        //     req, res,
        //     DataLoadersContext.getInstance(),
        //     ServicesContext.getInstance()
        // ),
        // graphiql: Environment.getConfig().server.graphiql,
        // formatError: exception => ({
        //     name: Exception.getName(exception.message),
        //     message: Exception.getMessage(exception.message),
        //     path: exception.path
        // })
    })(req, res);
});

export { routes }


