const argon2 = require('argon2');
const randomBytes = require('randombytes');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { User } = require('./server/models');

const secret = process.env.JWT_SECRET;
const isAuthenticated = expressJWT({ secret });

const register = async ({
  lastname, company, email, password, role,
}) => {
  const salt = randomBytes(32);
  const roleNumber = Number(role);
  const hashedPassword = await argon2.hash(password, { salt });
  const user = await User.create({
    lastname,
    company,
    email,
    password: hashedPassword,
    role,
  });
  return {
    id: user.id, lastname, company, email, roleNumber,
  };
};

const editUser = async ({
  lastname, company, email, password, role, id,
}) => {
  const salt = randomBytes(32);
  const hashedPassword = await argon2.hash(password, { salt });
  const userUpdate = await User.update({
    lastname,
    company,
    email,
    ...password && { password: hashedPassword },
    role,
  }, { where: { id } });
  return {
    userUpdate,
  };
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
  register, authenticate, isAuthenticated, editUser,
};
