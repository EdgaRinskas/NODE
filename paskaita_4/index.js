const express = require('express');
const app = express();
const data = require('./data');

// Route 1: Generic GET route that serves all the data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Route 2: Dynamic GET route filtering by car make
app.get('/api/data/cars/:make', (req, res) => {
  const make = req.params.make;
  const filteredData = data.filter(item => item.car === make);
  res.json(filteredData);
});

// Route 3: Dynamic GET route for user by ID
app.get('/api/data/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = data.find(item => item.id === userId);
  res.json(user);
});

// Route 4: GET route for all emails
app.get('/api/data/emails', (req, res) => {
  const emails = data.map(item => item.email);
  res.json(emails);
});

// Route 5: GET route for first and last names of all women
app.get('/api/data/women-names', (req, res) => {
  const womenNames = data
    .filter(item => item.gender === 'Female')
    .map(item => `${item.first_name} ${item.last_name}`);
  res.json(womenNames);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//GET http://localhost:3000/api/data
//GET http://localhost:3000/api/data/cars/Ford
//GET http://localhost:3000/api/data/user/:id
//GET http://localhost:3000/api/data/emails
//GET http://localhost:3000/api/data/women-names

