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
    lastname, company, email, password,
  } = req.body;
  const user = await auth.register({
    lastname, company, email, password,
  });
  res.send(user);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const userId = User.findOne({ where: { id } });
  res.send(userId);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    lastname, company, email, password,
  } = req.body;
  const updateUser = await User.update({
    lastname, company, email, password,
  }, { where: { id } });
  res.send(updateUser);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.send(id);
});

module.exports = router;
