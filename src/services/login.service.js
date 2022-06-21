const { User } = require('../database/models');

const hasUser = ({ email, password }) => {
  const user = User.findAll({ where: { email, password } });
  return user;
};

module.exports = {
  hasUser,
};