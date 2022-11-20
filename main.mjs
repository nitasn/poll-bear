import initMongoose from "./init-mongoose.mjs";

try {
  await initMongoose();
  console.log("mongodb connected :)");
} catch (err) {
  console.error("mongodb could not connect :(", err.message);
  process.exit(-1);
}

import express from "express";
const app = express();
app.use(express.json());

// servse static files (from the folder `public`)
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

import postsRoute from './routes/posts.mjs';
app.use('/posts', postsRoute);

const PORT = process.env.PORT || 4922;
app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
