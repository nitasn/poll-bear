import mongoose from "mongoose";
import { promisify } from "util";

const username = process.env.ATLAS_USERNAME;
const password = encodeURIComponent(process.env.ATLAS_PASSWORD);

const uri =
  `mongodb+srv://${username}:${password}@cluster0.ph59eea.mongodb.net/`
  + `?retryWrites=true&w=majority`;

export default promisify((resolve, reject) => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(uri, options, resolve);
  } catch (err) {
    reject(err);
  }
});
