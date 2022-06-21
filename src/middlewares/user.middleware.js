const MIN_CHAR = 8;
const MIN_PASS = 6;

const userValidation = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const checkEmail = /\S+@\S+\.\S+/;

  if (displayName.length < MIN_CHAR) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (!checkEmail.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }

  if (password.length < MIN_PASS) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

module.exports = {
  userValidation,
};