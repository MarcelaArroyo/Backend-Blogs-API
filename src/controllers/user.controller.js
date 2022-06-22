const express = require('express');

const userRouter = express.Router();

const { userValidation } = require('../middlewares/user.middleware');
const { tokenValidation } = require('../middlewares/token.middleware');

const { createUser, getAllUsers } = require('../services/user.service');

userRouter.post('/', userValidation, async (req, res) => {
  try {
    const token = await createUser(req.body);

    if (token.errMessage) {
      return res.status(409).json({ message: token.errMessage });
    }

    res.status(201).json(token);
  } catch (err) {
    res.status(500).json({ errMessage: err.message });
  }
});

userRouter.get('/', tokenValidation, async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
});

module.exports = userRouter;