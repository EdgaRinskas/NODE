const express = require('express');
const app = express();
const data = require('./data');

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.get('/api/data/cars/:make', (req, res) => {
  const make = req.params.make;
  const filteredData = data.filter(item => item.car === make);
  res.json(filteredData);
});

app.get('/api/data/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = data.find(item => item.id === userId);
  res.json(user);
});

app.get('/api/data/emails', (req, res) => {
  const emails = data.map(item => item.email);
  res.json(emails);
});

app.get('/api/data/women-names', (req, res) => {
  const womenNames = data
    .filter(item => item.gender === 'Female')
    .map(item => `${item.first_name} ${item.last_name}`);
  res.json(womenNames);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//GET http://localhost:3000/api/data
//GET http://localhost:3000/api/data/cars/Ford
//GET http://localhost:3000/api/data/user/:id
//GET http://localhost:3000/api/data/emails
//GET http://localhost:3000/api/data/women-names

