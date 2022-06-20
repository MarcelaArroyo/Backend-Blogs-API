const PostCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategoriesTable = sequelize.define('PostCategories', {},
    { timestamps: false, tableName: 'PostCategories' }
  );

  PostCategoriesTable.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      through: PostCategoriesTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'BlogPosts'
    });

    models.Categories.belongsToMany(models.BlogPosts, {
      through: PostCategoriesTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'Categories'
    });
  };

  return PostCategoriesTable;
}

module.exports = PostCategoriesSchema;