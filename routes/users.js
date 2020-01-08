const express = require('express');

const { User } = require('../server/models');
const auth = require('../authentication');

const router = express.Router();

router.get('/', auth.isAuthenticated, async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.post('/', auth.isAuthenticated, async (req, res) => {
  const { email, password } = req.body;
  const user = await auth.register({ email, password });
  res.send(user);
});

module.exports = router;
