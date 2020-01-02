require('dotenv').config();

const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.PORTPG,
});

app.get('/api/v1/construction-sites', (req, res) => {
  pool.query('SELECT * from construction_sites', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(results.rows);
  });
});

app.post('/api/v1/construction-sites', (req, res) => {
  const { name, coords } = req.body;
  pool.query(
    'INSERT INTO construction_sites (name,coords) VALUES ($1, $2)',
    [name, coords],
    (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(results);
    },
  );
});

app.put('api/v1/construction-sites/:id', (req, res) => {
  pool.query('UPDATE construction-sites SET $1 WHERE id=?',
    [formData, idConstructionSites],
    err => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un composant");
      } else {
        res.sendStatus(200);
      }
    }
  )
}

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
