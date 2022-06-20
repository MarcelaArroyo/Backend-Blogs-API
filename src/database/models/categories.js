const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define('Categories', {
    name: DataTypes.STRING
  });

  return CategoriesTable;
};

module.exports = CategoriesSchema;