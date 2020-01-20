require('dotenv').config();
const express = require('express');
const auth = require('./authentication');

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

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
