const express = require('express');

const { ConstructionSite } = require('../server/models');
const auth = require('../authentication');

const router = express.Router();

router.get('/', auth.isAuthenticated, async (req, res) => {
  const sites = await ConstructionSite.findAll();
  res.send(sites);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const specificSite = await ConstructionSite.findOne({ where: { id } });
  res.send(specificSite);
});

router.post('/', auth.isAuthenticated, async (req, res) => {
  const {
    name, coords, status, buyer, contact, num_conv, date_sign, type_grave, year, type_usage, departement, project_manager, commentary, area, photo, lots, tonnage,
  } = req.body;
  const site = await ConstructionSite.create({
    name, year, coords, status, buyer, contact, num_conv, date_sign, type_grave, type_usage, departement, project_manager, commentary, area, photo, lots, tonnage,
  });

  res.send(site);
});

router.put('/:id', auth.isAuthenticated, async (req, res) => {
  const { id } = req.params;
  const {
    name, coords, status, buyer, contact, num_conv, date_sign, type_grave, year, type_usage, departement, project_manager, commentary, area, photo, lots, tonnage,
  } = req.body;
  await ConstructionSite.update({
    name, coords, status, buyer, contact, num_conv, date_sign, type_grave, year, type_usage, departement, project_manager, commentary, area, photo, lots, tonnage,
  }, { where: { id } });
  const result = await ConstructionSite.findOne({ where: { id } });
  res.send(result);
});

router.delete('/:id', auth.isAuthenticated, async (req, res) => {
  const { id } = req.params;
  await ConstructionSite.destroy({ where: { id } });
  res.send(id);
});

module.exports = router;
