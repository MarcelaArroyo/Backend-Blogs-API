const { Category } = require('../database/models');

const createCategory = ({ name }) => Category.create({ name });

const getAllCategories = () => Category.findAll({
  attributes: { exclude: ['createdAt', 'updatedAt'] },
});

module.exports = {
  createCategory,
  getAllCategories,
};