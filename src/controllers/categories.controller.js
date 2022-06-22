const express = require('express');

const categoriesRouter = express.Router();

const { tokenValidation } = require('../middlewares/token.middleware');
const { categoriesValidation } = require('../middlewares/categories.middleware');

const { createCategory } = require('../services/categories.service');

categoriesRouter.post('/', tokenValidation, categoriesValidation, async (req, res) => {
  const category = await createCategory(req.body);
  res.status(201).json(category);
});

module.exports = categoriesRouter;