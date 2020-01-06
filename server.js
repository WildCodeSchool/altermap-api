require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;
<<<<<<< HEAD

=======
>>>>>>> Add get and put sequelize method, needs correction into put method, coords format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Construction_site } = require('./server/models');
<<<<<<< HEAD

app.get('/api/v1/construction-sites', async (req, res) => {
  const sites = await Construction_site.findAll();
  res.send(sites);
});

app.post('/api/v1/construction-sites', async (req, res) => {
  const { name, coords } = req.body;
  console.log(coords);
  const site = await Construction_site.create({ name, coords });
  res.send(site);
});

app.put('/api/v1/construction-sites/:id', async (req, res) => {
  const { id } = req.params;
  const { name, coords } = req.body;
  await Construction_site.update({ name, coords }, { where: { id } });
  const result = await Construction_site.findOne({ where: { id } });
  res.send(result);
});

app.delete('/api/v1/construction-sites/:id', async (req, res) => {
  const { id } = req.params;
  await Construction_site.destroy({ where: { id } });
  res.send(id);
=======

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
>>>>>>> Add get and put sequelize method, needs correction into put method, coords format
});

app.put('/api/v1/construction-sites/:id', async (req, res) => {
  const { id } = req.params;
  const { name, coords } = req.body;
  console.log(req.body);
  await pool.query('UPDATE construction_sites SET coords =$3, name = $1  WHERE id =$2',
    [name, id, coords],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un chantier");
      } else {
        res.sendStatus(200);
      }
    });
});

app.delete('/api/v1/construction-sites/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  await pool.query('DELETE FROM construction_sites where id= $1',
    [id],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'un chantier");
      } else {
        res.sendStatus(200);
      }
      console.log(id);
    });
});
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
