const express = require('express');

//path with ./ for something local
const quoteCards = require('./game/quoteCards');

const app = express();
const port = 3000;

app
    .get('/', (req, res) => res.send('Hello Expansive Universe!')) 
    .get('/game/quoteCards', (req, res) => res.send(quoteCards));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));