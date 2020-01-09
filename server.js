require('dotenv').config();

const express = require('express');
const auth = require('./authentication');
const geojson = require('./zones_inondables_66.json');

const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/construction-sites', require('./routes/construction-sites'));
app.use('/api/v1/users', require('./routes/users'));


app.post('/api/v1/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token } = await auth.authenticate({ email, password });
    res.send(token);
  } catch (err) {
    res.status(401).send(err);
  }
});

app.get('/api/v1/geojson', (req, res) => {
  const { coordinates } = geojson.features[0].geometry;
  const { name } = geojson;
  console.log(JSON.stringify({ coords: 'bla', name }));
  res.send(JSON.stringify({ coordinates, name }));
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
