// Start our app!
const app = require('./app');
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${PORT}`);
});
