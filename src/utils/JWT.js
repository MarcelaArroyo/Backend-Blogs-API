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
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (err) {
    return { status: 401, message: 'Expired or invalid token' };
  }
};

module.exports = {
  generateToken,
  verifyToken,
};