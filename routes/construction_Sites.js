const express = require('express');

const { Construction_site } = require('../server/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const sites = await Construction_site.findAll();
  res.send(sites);
});

router.post('/', async (req, res) => {
  const { name, coords } = req.body;
  const site = await Construction_site.create({ name, coords });
  res.send(site);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, coords } = req.body;
  await Construction_site.update({ name, coords }, { where: { id } });
  const result = await Construction_site.findOne({ where: { id } });
  res.send(result);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Construction_site.destroy({ where: { id } });
  res.send(id);
});


module.exports = router;
