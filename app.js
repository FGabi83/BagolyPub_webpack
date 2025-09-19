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

app.get('/kinalat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'kinalat.html'));
});

app.get('/kapcsolat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'kapcsolat.html'));
});

app.get('/belga', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'belga.html'));
});

app.get('/adatvedelem', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist',  'adatvedelem.html'));
});

app.get('/impresszum', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'impresszum.html'));
});

// Export app for start.js
module.exports = app;
// Path: start.js