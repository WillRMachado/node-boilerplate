const { buildSchema } = require('graphql')

const queries = require('./queries.graphql')
const types = require('./types.graphql')
const mutations = require('./mutations.graphql')

const schema = buildSchema(
    `
${types}
${queries}
${mutations}
`)

export { schema }