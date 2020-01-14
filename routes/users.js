const express = require('express');

const { User } = require('../server/models');
const auth = require('../authentication');

const router = express.Router();


router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.header('X-Total-Count', users.length);
  res.send(users);
});

router.post('/', async (req, res) => {
  const {
    lastname, compagny, email, password,
  } = req.body;
  const user = await auth.register({
    lastname, compagny, email, password,
  });
  res.send(user);
});

module.exports = router;
