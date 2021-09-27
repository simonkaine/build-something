const express = require('express');

const app = express();

app.use(express.json());

// do I want /api/character/1 ? <<<<<
app.use('/api/character', require('./controllers/character.js')); 

app.use(require('./middleware/not-found'));

app.use(require('./middleware/error'));

module.exports = app;
