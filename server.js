import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import schema from './src/schema'

import { NASAAPI } from './src/dataSources'

const PORT = process.env.PORT || 4000

// create express service for middleware adaptation
const app = express()
const server = new ApolloServer({
  schema,
  dataSources: () => ({
    nasaApi: new NASAAPI()
  })
})

server.applyMiddleware({
  app
})

app.listen(
  {
    port: PORT
  },
  () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  }
)
