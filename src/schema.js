import { makeExecutableSchema } from "graphql-tools";

import users from "./users";
import photos from "./photos";
import posts from "./posts";

const Query = `
type Query {
    users: [User]
    user(id: ID!): User
    photos : [Photo]
    photo(id: ID!): Photo
    photoByUser(userId: ID!): [Photo]
    posts:[Post]
    post(id:D!):Post
    

  }

  type Mutation {
    addPhoto(input: PhotoInput): Photo
    updatePhoto(input: PhotoInput): Photo
    removePhoto(id: ID!): Boolean
    addUser(input: UserInput): User
    updateUser(input: UserInput): User
    removeUser(id: ID!): Boolean
    addPost(input: PostInput): Post
    removePost(id: ID!): Boolean
}

`
export const schema = makeExecutableSchema({
  typeDefs: [Query, users.typeDef, photos.typeDef, posts.typDef],
  resolvers: {
    Query: Object.assign(
      {},
      users.resolvers.Query,
      photos.resolvers.Query,
      posts.resolvers.Query
    ),
    Mutation: Object.assign(
      {},
      users.resolvers.Mutation,
      photos.resolvers.Mutation
    )
  }
});
