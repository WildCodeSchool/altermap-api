const express = require('express');

const { ConstructionSite } = require('../server/models');
const auth = require('../authentication');

const router = express.Router();

router.get('/', async (req, res) => {
  const sites = await ConstructionSite.findAll();
  res.send(sites);
});

router.post('/', async (req, res) => {
  const { name, coords } = req.body;
  const site = await ConstructionSite.create({ name, coords });
  res.send(site);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, coords } = req.body;
  await ConstructionSite.update({ name, coords }, { where: { id } });
  const result = await ConstructionSite.findOne({ where: { id } });
  res.send(result);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await ConstructionSite.destroy({ where: { id } });
  res.send(id);
});

module.exports = router;
