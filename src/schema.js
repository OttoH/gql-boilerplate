import mergeDeepLeft from 'ramda/src/mergeDeepLeft'
import { makeExecutableSchema } from 'apollo-server-express'

import { newsLayoutTypes, newsLayoutResolvers } from './newsLayouts'

export default makeExecutableSchema({
  typeDefs: [newsLayoutTypes],
  resolvers: mergeDeepLeft({}, newsLayoutResolvers) // merge for DEMO
})
