const express = require('express');

const { User } = require('../server/models');
const auth = require('../authentication');

const router = express.Router();

router.get('/', auth.isAuthenticated, async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.post('/', async (req, res) => {
  const { email, password, role } = req.body;
  console.log(role);
  const user = await auth.register({ email, password, role });
  res.send(user);
});

module.exports = router;
