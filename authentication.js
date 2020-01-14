const argon2 = require('argon2');
const randomBytes = require('randombytes');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { User } = require('./server/models');

const secret = process.env.JWT_SECRET;
const isAuthenticated = expressJWT({ secret });

const register = async ({ email, password, role }) => {
  const salt = randomBytes(32);
  const roleNumber = Number(role);
  console.log({ roleNumber });
  const hashedPassword = await argon2.hash(password, { salt });
  await User.create({
    email,
    password: hashedPassword,
    role,
  });
  return { email, roleNumber };
};

const authenticate = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found.');
  }
  const isPasswordCorrect = await argon2.verify(user.password, password);
  if (!isPasswordCorrect) {
    throw new Error('Wrong password.');
  }

  const payload = {
    id: user.id,
  };
  return {
    token: jwt.sign(payload, secret, { expiresIn: '12h' }),
  };
};

module.exports = {
  register, authenticate, isAuthenticated,
};
