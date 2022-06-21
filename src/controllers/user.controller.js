const express = require('express');

const userRouter = express.Router();

const { userValidation } = require('../middlewares/user.middleware');

const { createUser } = require('../services/user.service');

userRouter.post('/', userValidation, async (req, res) => {
  try {
    const token = await createUser(req.body);

    if (token.errMessage) {
      return res.status(409).json({ message: token.errMessage });
    }

    res.status(201).json(token);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = userRouter;