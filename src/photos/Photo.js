import mongoose from "mongoose";

const PhotoSchema = mongoose.Schema({
  url: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});
export default mongoose.model("Photo", PhotoSchema);
