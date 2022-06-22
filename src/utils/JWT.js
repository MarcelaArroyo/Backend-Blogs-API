require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '20m',
  algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const verifyToken = async (token) => {
  try {
    const introspection = jwt.verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (err) {
    return { errMessage: 'Expired or invalid token' };
  }
};

module.exports = {
  generateToken,
  verifyToken,
};