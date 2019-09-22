import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
   
    title: String,
    description: String,
    photo: String,
    date:String,
    budget:String,
    transport:String,
    accommodation:String,
    access:String,
    gastronomy:String,
});
const Post = mongoose.model("Post", PostSchema);
export default Post;



