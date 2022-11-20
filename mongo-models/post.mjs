import mongoose from "mongoose";
import mongodb from "mongodb";
import { voteSchema } from "./vote.mjs";
const { ObjectId } = mongodb;

const { model, Schema } = mongoose;

const postSchema = new Schema({
  author: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  imgURLs: {
    type: [String],
    required: true,
  },
  votes: {
    type: [voteSchema],
    required: true,
  }
});

export default model("Post", postSchema);
export { postSchema };