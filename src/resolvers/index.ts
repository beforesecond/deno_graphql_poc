import { applyGraphQL } from 'https://deno.land/x/oak_graphql@0.1/mod.ts'
import user, { resolvers as UserResolvers } from './user.ts'

export const GraphQLService = await applyGraphQL({
  typeDefs: [await user],
  resolvers: [await UserResolvers],
})
