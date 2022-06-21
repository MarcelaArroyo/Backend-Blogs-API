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

module.exports = {
  createUser,
};