require('dotenv').config();
const express = require('express');
const auth = require('./authentication');

const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/construction-sites', require('./routes/construction-sites'));
app.use('/api/v1/users', require('./routes/users'));
const { Construction_site } = require('./server/models');

app.post('/api/v1/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token } = await auth.authenticate({ email, password });
    res.send(token);
  } catch (err) {
    res.status(401).send(err);
  }
});

app.get('/api/v1/construction-sites', async (req, res) => {
  const sites = await Construction_site.findAll();
  res.send(sites);
});
app.post('/api/v1/construction-sites', async (req, res) => {
  console.log(req.body);
  const { name, coords } = req.body;
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
});
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
