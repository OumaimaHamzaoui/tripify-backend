import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});

UserSchema.methods.toJSON = function UserToJSON() {
  return {
    id: this._id,
    firstName: this.firstName,
    lastName: this.lastName
  };
};

export default mongoose.model("User", UserSchema);
