import User from "./User";
import Photo from "../photos/Photo";

export const resolvers = {
  Query: {
    users: async (_, $, { models }) => {
      const user = await models.User.find();
      return user;
    },
    user: (_, { id }, { models }) => models.User.findOne({ _id: id })
  },
  Mutation: {
    addUser: async (_, { input }, { models }) => {
      const user = new models.User({
        firstName: input.firstName,
        lastName: input.lastName
      });
      const newUser = await user.save();
      return newUser;
    },
    updateUser: async (_, { input: { id, firstName, lastName } }) => {
      const utilisateur = await User.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            firstName,
            lastName
          }
        }
      );
      return utilisateur;
    },
    // removeUser : async (_, {id}) => {
    //     await  User.findByIdAndRemove(id);
    //     return true;
    // }
    removeUser: async (_, { id }) => {
      try {
        await Photo.deleteMany({ user: id });
        await User.findByIdAndDelete(id);
        return true;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
