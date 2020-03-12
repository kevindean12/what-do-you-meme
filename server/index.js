const express = require('express');
const gameController = require('./controllers/game');

const app = express();
const port = 3000;

app
    .use(express.json())
    .use(express.urlencoded({extended: true})) //need this if handling regular form submissions
    .get('/', (req, res) => res.send('Hello Expansive Universe!'))
    .use('/game', gameController);
 

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));