const argon2 = require('argon2');
const randomBytes = require('randombytes');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { User } = require('./server/models');

const secret = process.env.JWT_SECRET;
const isAuthenticated = expressJWT({ secret });

const hash = async (password) => argon2.hash(password, { salt: randomBytes(32) });

const register = async ({
  lastname, company, email, password, role,
}) => {
  const roleNumber = Number(role);
  const user = await User.create({
    lastname,
    company,
    email,
    password: await hash(password),
    role,
  });
  return {
    id: user.id, lastname, company, email, roleNumber,
  };
};

const editUser = async ({
  lastname, company, email, password, role, id,
}) => {
  const userUpdate = await User.update({
    lastname,
    company,
    email,
    ...password && { password: await hash(password) },
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
    role: user.role,
  };
  return {
    token: jwt.sign(payload, secret, { expiresIn: '12h' }),
  };
};

module.exports = {
  register, authenticate, isAuthenticated, editUser,
};
