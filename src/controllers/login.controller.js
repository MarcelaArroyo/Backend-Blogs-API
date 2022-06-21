const express = require('express');

const loginRouter = express.Router();

const { loginValidation } = require('../middlewares/login.middleware');

const { hasUser } = require('../services/login.service');

loginRouter.post('/', loginValidation, async (req, res) => {
  try {
    const user = await hasUser(req.body);

    if (user.length !== 0) {
      return res.status(200).json(user);
    }

    res.status(400).json({ message: 'Invalid fields' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = loginRouter;