const express = require('express');

const { ConstructionSite } = require('../server/models');
const auth = require('../authentication');

const router = express.Router();

router.get('/', async (req, res) => {
  const sites = await ConstructionSite.findAll();
  res.send(sites);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const specificSite = await ConstructionSite.findOne({ where: { id } });
  res.send(specificSite);
});

router.post('/', async (req, res) => {
  const {
    name, coords, status, buyer, contact, num_conv, date_sign, type_grave, year, type_usage, departement, project_manager, commentary, area, photo, lots, tonnage,
  } = req.body;
  const site = await ConstructionSite.create({
    name, year, coords, status, buyer, contact, num_conv, date_sign, type_grave, type_usage, departement, project_manager, commentary, area, photo, lots, tonnage,
  });
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
