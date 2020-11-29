// type Query {
// users:'a'
// }

const {
    GraphQLSchema,
    buildSchema,
    GraphQLObjectType,
    GraphQLString, GraphQLAbstract } = require('graphql')



const users = [
    {
        id: 1, name: 'wwil', email: 'dois'
    }
]

// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'Query',
//         fields: {
//             hello: {
//                 type: GraphQLString,
//                 resolve(teste) {
//                     return 'world' + teste;
//                 },
//             },
//             quoteOfTheDay: {
//                 type: GraphQLString,

//             },
//         },
//     }),
//     mutation: new GraphQLObjectType({
//         name: 'Mutation',
//         fields: {
//             hello: {
//                 type: GraphQLString,
//                 resolve() {
//                     return 'world';
//                 },
//             },
//             world: {
//                 type: GraphQLString,
//                 resolve() {
//                     return 'world';
//                 },
//             },
//         },
//     }),
// });


// random: Float!
// rollThreeDice: [Int]
// rollDice(numDice: Int!, numSides: Int): [Int]

const schema = buildSchema(`
type Query {
  quoteOfTheDay(par:String): String
  hello:String
  list:[String]

}
`)

export { schema }