const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
import User from "./users/User";
import Photo from "./photos/Photo";
const { schema } = require("./schema");
const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return {
      models: {
        User,
        // Post,
        Photo
        // Comment
      }
    };
  }
});
mongoose
  .connect(
    "mongodb+srv://admin:pass123@hackathon-0bkht.gcp.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Database is connected");
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  });
