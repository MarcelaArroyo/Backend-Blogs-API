const { User } = require('../database/models');
const { generateToken } = require('../utils/JWT');

const createUser = async ({ displayName, email, password, image }) => {
  const hasUser = await User.findOne({
    where: { email },
  });

  if (hasUser) return { errMessage: 'User already registered' };
  
  const user = await User.create({ displayName, email, password, image });

  // Gerar Token
  const token = generateToken(user.dataValues);
  return { token };
};

const getAllUsers = () => User.findAll({
  attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
});

const getUserById = (id) => {
  const user = User.findOne({
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    where: { id },
  });

  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};