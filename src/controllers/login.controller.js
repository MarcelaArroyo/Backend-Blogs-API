const express = require('express');

const loginRouter = express.Router();

const { loginValidation } = require('../middlewares/login.middleware');

const { authentication } = require('../services/login.service');

loginRouter.post('/', loginValidation, async (req, res) => {
  try {
    const token = await authentication(req.body);

    if (token.errMessage) {
      return res.status(400).json({ message: token.errMessage });
    }

    res.status(200).json(token);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = loginRouter;