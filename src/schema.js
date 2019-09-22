import { makeExecutableSchema } from "graphql-tools";

import users from "./users";
import photos from "./photos";

const Query = `
type Query {
    users: [User]
    user(id: ID!): User
    photos : [Photo]
    photo(id: ID!): Photo
    photoByUser(userId: ID!): [Photo]
  }

  type Mutation {
    addPhoto(input: PhotoInput): Photo
    updatePhoto(input: PhotoInput): Photo
    removePhoto(id: ID!): Boolean
    addUser(input: UserInput): User
    updateUser(input: UserInput): User
    removeUser(id: ID!): Boolean
}

`;

export const schema = makeExecutableSchema({
  typeDefs: [Query, users.typeDef, photos.typeDef],
  resolvers: {
    Query: Object.assign({}, users.resolvers.Query, photos.resolvers.Query),
    Mutation: Object.assign(
      {},
      users.resolvers.Mutation,
      photos.resolvers.Mutation
    )
  }
});
