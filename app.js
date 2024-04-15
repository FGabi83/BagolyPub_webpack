const express = require('express');
const path = require('path');
const app = express();



// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));


// Routes for specific HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

app.get('/kinalat.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'kinalat.html'));
});

app.get('/kapcsolat.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'kapcsolat.html'));
});

app.get('/adatvedelem.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist',  'adatvedelem.html'));
});

app.get('/impresszium.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'impresszium.html'));
});

// Export app for start.js
module.exports = app;
// Path: start.js