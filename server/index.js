const express = require('express');
const gameController = require('./controllers/game');
const path = require('path');

const app = express();
const port = 3000;

app
    .use(express.json())
    .use(express.urlencoded({extended: true})) //need this if handling regular form submissions
    .use(express.static(__dirname + '/../client/dist')) //blocks the '/' below since this runs first
    .get('/', (req, res) => res.send('Hello Expansive Universe!'))
    .use('/game', gameController)

    .use( (req, res) => {
        const homepath = path.join(__dirname, '/../client/dist/index.html');
        res.sendfile(homepath);

    }) //catch-all if request not handled
 

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));