const express = require('express');

const postRouter = express.Router();

const { tokenValidation } = require('../middlewares/token.middleware');
const { postValidation, updatePostValidation } = require('../middlewares/post.middleware');

const { createPost, getAllPosts, getPostById, uptadePost } = require('../services/post.service');

postRouter.post('/', tokenValidation, postValidation, async (req, res) => {
  const user = res.locals.payload;
  const post = await createPost(req.body, user.id);

  if (post.errMessage) return res.status(400).json({ message: post.errMessage });

  res.status(201).json(post);
});

postRouter.get('/', tokenValidation, async (req, res) => {
  const posts = await getAllPosts();
  res.status(200).json(posts);
});

postRouter.get('/:id', tokenValidation, async (req, res) => {
  const { id } = req.params;
  const post = await getPostById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  res.status(200).json(post);
});

postRouter.put('/:id', tokenValidation, updatePostValidation, async (req, res) => {
  const { id } = req.params;

  const post = await uptadePost(req.body, id);

  res.status(200).json(post);
});

module.exports = postRouter;