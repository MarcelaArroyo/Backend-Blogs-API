const PostCategoriesSchema = (sequeliza, DataTypes) => {
  const PostCategoriesTable = sequelize.define('PostCategories', {},
    { timestamps: false, tableName: 'PostsCategories' }
  );

  PostCategoriesTable.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      through: PostCategoriesTable,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });

    models.Categories.belongsToMany(models.BlogPosts, {
      through: PostCategoriesTable,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  };

  return PostCategoriesTable;
}

module.exports = PostCategoriesSchema;