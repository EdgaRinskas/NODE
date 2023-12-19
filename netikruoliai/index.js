const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const people = [];

app.post('/addPerson', (req, res) => {
  const { firstname, lastname } = req.body;
  const person = { firstname, lastname };
  people.push(person);
  res.sendStatus(200);
});

app.get('/getPeople', (req, res) => {
  res.json(people);
});

app.use(express.static('front-end'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
