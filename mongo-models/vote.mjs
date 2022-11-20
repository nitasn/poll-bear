import mongoose from "mongoose";
import mongodb from "mongodb";
const { ObjectId } = mongodb;

const { model, Schema } = mongoose;

const voteSchema = new Schema({
  by: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  indexChosen: {
    type: Number,
    required: true,
  }
});

export default model("Vote", voteSchema);
export { voteSchema };