const express = require('express');
const path = require('path');
const app = express();



// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Temporary routes
/*app.use('/', (req, res) => {
  const drinks = require('./data/drinks.json');
  const shots = drinks.filter(drink => drink.category === 'shots');
  const brewedBeers = drinks.filter(drink => drink.category === 'brewed beer');
  res.json({ shots, brewedBeers });
 });*/

// Az index.html fájl szolgáltatása a gyökérkönyvtárból
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Export app for start.js
module.exports = app;
// Path: start.js