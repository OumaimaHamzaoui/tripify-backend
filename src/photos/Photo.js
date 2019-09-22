import mongoose from "mongoose";

const PhotoSchema = mongoose.Schema({
  url: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
});
const Photo = mongoose.model("Photo", PhotoSchema);
export default Photo;
