const express = require('express');
const path = require('path'); //path is relative to node_modules, unless prefix with a dot, then it's relative to execution directory

const gameController = require('./controllers/game');
const usersController = require('./controllers/users');

const app = express();
const port = 3000;

app
    .use(express.json())
    .use(express.urlencoded({extended: true})) //need this if handling regular form submissions
    .use(express.static(__dirname + '/../client/dist')) //blocks the '/' below since this runs first
    .get('/', (req, res) => res.send('Hello Expansive Universe!'))
    .use('/game', gameController)
    .use('/users', usersController)

    .use( (req, res) => {
        const homepath = path.join(__dirname, '/../client/dist/index.html');
        res.sendfile(homepath);

    }) //catch-all if request not handled
    .use((err, req, res, next) => {
        console.error(err);
        const errorCode = err.code || 500; //err.code unless it's null
        res.status(errorCode).send({message: err.message});
    })
 

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));