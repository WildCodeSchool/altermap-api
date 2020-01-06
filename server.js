require('dotenv').config();

const express = require('express');

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Construction_site } = require('./server/models');

app.get('/api/v1/construction-sites', async (req, res) => {
/*   pool.query('SELECT * from construction_sites', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(results.rows);
  }); */
  const sites = await Construction_site.findAll();
  res.send(sites);
});

app.post('/api/v1/construction-sites', async (req, res) => {
  const { name, coords } = req.body;
  /* pool.query(
    'INSERT INTO construction_sites (name,coords) VALUES ($1, $2)',
    [name, coords],
    (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(results);
    },
  ); */
  const site = await Construction_site.create({ name, coords });
  res.send(site);
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
