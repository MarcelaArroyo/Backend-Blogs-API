const { BlogPost, Category, PostCategory } = require('../database/models');

const createPostCategory = (postId, categoryIds) => categoryIds.forEach((category) => {
  PostCategory.create({
    postId,
    categoryId: category,
  });
});

const createPost = async ({ title, content, categoryIds }, userId) => {
  const hasCategoryIds = await Category.findAndCountAll({ where: { id: categoryIds } });
  
  if (hasCategoryIds.count !== categoryIds.length) return { errMessage: '"categoryIds" not found' };

  const post = await BlogPost.create({ title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });

  createPostCategory(post.dataValues.id, categoryIds);

  return post;
};

module.exports = {
  createPost,
};