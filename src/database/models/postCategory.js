const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    { timestamps: false, tableName: "PostCategory" }
  );

  PostCategoryTable.associate = (models) => {

      models.BlogPost.belongsToMany(models.Category, {
          through: PostCategoryTable,
          foreignKey: 'postId',
          otherKey: 'categoryId',
          as: 'categories'
      });

      models.Category.belongsToMany(models.BlogPost, {
          through: PostCategoryTable,
          foreignKey: "categoryId",
          otherKey: "postId",
          as: 'blogPost'
      });

  }

  return PostCategoryTable;
}

module.exports = PostCategorySchema;

