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

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
