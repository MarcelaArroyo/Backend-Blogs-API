const { verifyToken } = require('../utils/JWT');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  const payload = await verifyToken(token);

  if (!payload) return res.status(401).json({ message: 'Expired or invalid token' });

  res.locals.payload = payload;

  next();
};

module.exports = {
  tokenValidation,
};