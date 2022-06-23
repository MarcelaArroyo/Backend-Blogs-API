const postValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (title === '' || content === '' || categoryIds.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const updatePostValidation = (req, res, next) => {
  const { id } = req.params;
  const userId = res.locals.payload.id;
  const { title, content } = req.body;

  if (+id !== userId) return res.status(401).json({ message: 'Unauthorized user' });

  if (title === '' || content === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = {
  postValidation,
  updatePostValidation,
};