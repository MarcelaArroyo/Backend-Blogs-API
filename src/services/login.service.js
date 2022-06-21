const { User } = require('../database/models');
const { generateToken } = require('../utils/JWT');

const authentication = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email'],
    where: { email, password },
  });

  if (!user) return { errMessage: 'Invalid fields' };
  
  // Gerar Token
  const token = generateToken(user.dataValues);
  return { token };
};

module.exports = {
  authentication,
};