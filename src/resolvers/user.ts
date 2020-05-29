import { gql } from 'https://deno.land/x/oak_graphql/mod.ts'

export const resolvers = {
  Query: {
    getUser: (parent: any, { id }: any, context: any, info: any) => {
      console.log('id', id, context)
      return {
        firstName: 'wooseok',
        lastName: 'lee',
      }
    },
  },
  Mutation: {
    setUser: (
      parent: any,
      { firstName, lastName }: any,
      context: any,
      info: any
    ) => {
      console.log('input:', firstName, lastName)
      return {
        done: true,
      }
    },
  },
}

export default gql`
  type User {
    firstName: String
    lastName: String
  }

  input UserInput {
    firstName: String
    lastName: String
  }

  type ResolveType {
    done: Boolean
  }

  type Query {
    getUser(id: String): User
  }

  type Mutation {
    setUser(input: UserInput!): ResolveType!
  }
`
