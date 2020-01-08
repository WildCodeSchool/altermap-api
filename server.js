require('dotenv').config();

const express = require('express');
const auth = require('./authentication');

const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const constructionSites = require('./routes/construction_Sites');
const users = require('./routes/users');

app.use('/api/v1/construction-sites', constructionSites);
app.use('/api/v1/users', users);


app.post('/api/v1/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token } = await auth.authenticate({ email, password });
    res.send(token);
  } catch (err) {
    res.status(401).send(err);
  }
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
