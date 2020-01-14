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

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    lastname, compagny, email, password,
  } = req.body;
  const updateUser = await User.update({
    lastname, compagny, email, password,
  }, { where: { id } });
  res.send(updateUser);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.send(id);
});

module.exports = router;
