require('dotenv').config();
const express = require('express');
const auth = require('./authentication');
const cities = require('./public/cities.json');

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
const { User } = require('./server/models');

app.use('/api/v1/construction-sites', require('./routes/construction-sites'));

app.use('/api/v1/users', require('./routes/users'));

app.post('/api/v1/login', async (req, res) => {
  const { email, password } = req.body;
  const role = User.findOne({ where: { email } });
  try {
    const { token } = await auth.authenticate({ email, password });
    res.send({ token, role });
  } catch (err) {
    res.status(401).send(err);
  }
});

app.post('/api/v1/cities', async (req, res) => {
  const { search } = req.body;
  let result = [];
  for (let i = 0; i < cities.length; i++) {
    const cityName = cities[i].nom.toLowerCase();
    if (cityName.includes(search.toLowerCase()) && result.length < 7 && search.length > 1) {
      result.push(cities[i]);
    }
    if (result.length > 7) { break; }
  }
  result.sort((last, after) => last.nom.length - after.nom.length);
  result = result.map((city) => ({
    nom: city.nom,
    coordinates: [city.centre.coordinates[1], city.centre.coordinates[0]],
    code: city.code,
  }));
  res.send(result.slice(0, 5));
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
