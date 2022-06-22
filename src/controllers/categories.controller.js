const express = require('express');

const categoriesRouter = express.Router();

const { tokenValidation } = require('../middlewares/token.middleware');
const { categoriesValidation } = require('../middlewares/categories.middleware');

const { createCategory,
  getAllCategories,
} = require('../services/categories.service');

categoriesRouter.post('/', tokenValidation, categoriesValidation, async (req, res) => {
  const category = await createCategory(req.body);
  res.status(201).json(category);
});

categoriesRouter.get('/', tokenValidation, async (req, res) => {
  const categories = await getAllCategories();
  res.status(200).json(categories);
});

module.exports = categoriesRouter;