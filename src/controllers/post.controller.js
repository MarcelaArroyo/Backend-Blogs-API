const express = require('express');

const postRouter = express.Router();

const { tokenValidation } = require('../middlewares/token.middleware');
const { postValidation } = require('../middlewares/post.middleware');

const { createPost } = require('../services/post.service');

postRouter.post('/', tokenValidation, postValidation, async (req, res) => {
  const user = res.locals.payload;
  const post = await createPost(req.body, user.id);

  if (post.errMessage) return res.status(400).json({ message: post.errMessage });

  res.status(201).json(post);
});

module.exports = postRouter;