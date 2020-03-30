const express = require('express');

//path with ./ for something local
const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');

//acts as a local controller
const router = express.Router();

game.SubmitCaption("Corona sucks", 0);

router
    .use('/quoteCards', (req, res, next) => {
        console.log({
            method: req.method, body: req.body
        });
        next(); //async function, so call next to indicate when to move on
    })
    .get('/quoteCards', (req, res) => res.send(quoteCards))
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.query.text);
        res.send(quoteCards.list[quoteCards.list.length - 1]);
    })
    .get('/', (req, res) => res.send({
        Players: game.Players,
        PictureDeck: game.PictureDeck,
        CurrentPicture: game.CurrentPicture,
        CardsInPlay: game.CardsInPlay.map(x => ({...x, playerID: 'unknown'}) )
    })) //the path is to /game since we're inside the game controller here
    .post('/cardsInPlay', (req, res) => {
        const playerID = req.body.playerID;
        game.SubmitCaption(req.body.caption, playerID);
    })

module.exports = router;