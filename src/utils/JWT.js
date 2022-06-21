require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '20m',
  algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

module.exports = {
  generateToken,
};