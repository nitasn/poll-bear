import { Router } from "express";
import Post from "../mongo-models/post.mjs";

const route = Router();

const omit__v_field = { __v: false };

route.get('/all', async (req, res) => {
  try {
    const allPosts = await Post.find({}, omit__v_field)
      .sort({ date: -1 })
      .populate("author")
      .populate("votes", ["by"])
      .exec();

    return res.status(200).send(allPosts);
  }
  catch (err) {
    console.error(`error getting all posts:`, err.message);
    return res.status(500).send(err);
  }
});

export default route;