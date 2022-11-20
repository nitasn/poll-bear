import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
    required: true,
  },
  profilePicUrl: {
    type: String,
    required: false,
  },
  // todo password-hash, whatever
});

export default model("User", userSchema);
export { userSchema };