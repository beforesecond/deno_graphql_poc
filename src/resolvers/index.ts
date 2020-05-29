import { applyGraphQL, gql } from 'https://deno.land/x/oak_graphql/mod.ts'
import user, { resolvers as UserResolvers } from './user.ts'

export const GraphQLService = applyGraphQL({
  typeDefs: [user],
  resolvers: [UserResolvers],
})
