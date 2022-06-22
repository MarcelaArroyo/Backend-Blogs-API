const express = require('express');

const userRouter = express.Router();

const { userValidation } = require('../middlewares/user.middleware');
const { tokenValidation } = require('../middlewares/token.middleware');

const { createUser,
  getAllUsers,
  getUserById,
} = require('../services/user.service');

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

userRouter.get('/:id', tokenValidation, async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' }); 

  res.status(200).json(user);
});

module.exports = userRouter;