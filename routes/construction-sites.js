const express = require('express');
const { Parser } = require('json2csv');

const { ConstructionSite } = require('../server/models');
const auth = require('../authentication');

const router = express.Router();

router.get('/export', async (req, res) => {
  const cs = await ConstructionSite.findAll();
  let fields = cs.map(item => {
    for (let i in item) {
      return item.dataValues
    }
  })
  const json2csvParser = new Parser({ fields: Object.keys(fields[0]) });
  const csv = json2csvParser.parse(cs);
  res.send(csv)
})

router.get('/', auth.isAuthenticated, async (req, res) => {
  const sites = await ConstructionSite.findAll();
  res.send(sites);
});

router.get('/:id', auth.isAuthenticated, async (req, res) => {
  res.send(await ConstructionSite.findOne({ where: { id: req.params.id } }));
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
