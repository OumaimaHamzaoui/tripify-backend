export const resolvers = {
    Query: {
      Posts: async (_, $, { models }) => {
        const Post = await models.Post.find();
        return Post;
      },
     
    },
    Mutation: {
      addPost: async (_, { input }, { models }) => {
        const Post = new models.Post({
           
            title: input.title,
            description: input.
            description,
            // photo: String,
            date:input.date,
            budget:input.budget,
            transport:input.transport,
            accommodation:input.accommodation,
            access:input.access,
            gastronomy:input.gastronomy,
     });
        
        const newPost = await Post.save();
        console.log("----", newPost);
        return newPost;
      },
    //   updatePost: async (_, { input: { id, url, user } }) => {
    //     const update = await Post.findByIdAndUpdate(
    //       { _id: id },
    //       {
    //         $set: {
    //           url,
    //           user
    //         }
    //       }
    //     );
    //     return update;
    //   },
      removePost: async (_, { id }) => {
        await Post.findByIdAndRemove(id);
        return true;
      }
    }
  };
  