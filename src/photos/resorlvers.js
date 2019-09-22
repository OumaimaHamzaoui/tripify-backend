import Photo from "./Photo";


export const resolvers = {
  Query: {
    photos: async (_, $, { models }) => {
      const photo = await models.Photo.find();
      return photo;
    },
    photo: (_, { id }, { models }) => models.photo.findOne({ _id: id }),
    photoByUser: async (_, { userId }, { models }) => {
      const result = await models.Photo.find({ user: userId }).populate("user");
      return result;
    }
  },
  mutation: {
    addPhoto: async (_, { input }, { models }) => {
      const photo = new models.Photo({
        url: input.url,
        user: input.user
      });
      const newPhoto = await photo.save();
      return newPhoto;
    },
   


    updatePhoto: async (_, { input: { id, url, user } }) => {
      const update = await Photo.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            url,
            user
          }
        }
      );
      return update;
    },
    removePhoto: async (_, { id }) => {
      await Photo.findByIdAndRemove(id);
      return true;
    }
  }
};
