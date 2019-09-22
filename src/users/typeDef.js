export const typeDef = `
  type User {
    id: ID
    firstName: String
    lastName: String
    photos: [Photo]
  }

  input UserInput {
    firstName: String
    lastName: String
  }

`;
