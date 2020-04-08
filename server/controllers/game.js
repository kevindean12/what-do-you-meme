const express = require('express');

//path with ./ for something local
const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');

//acts as a local controller
const router = express.Router();

router
    .get('/', (req, res) => res.send({
        Players: game.Players,
        PictureDeck: game.PictureDeck,
        CurrentPicture: game.CurrentPicture,
        CardsInPlay: game.CardsInPlay.map(x => ({...x, playerID: 'unknown'}) )
    }))
    .post('/join', (req, res) => res.send(game.Join(req.body.userID)))
    .post('/flipPicture', (req, res) => res.send(game.FlipPicture()))
    .get('/quoteCards', (req, res) => res.send(quoteCards))
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.body.text);
        res.send(quoteCards.list[quoteCards.list.length - 1]);
    })
    .post('/cardsInPlay', (req, res) => {
        const playerID = req.body.playerID;
        game.SubmitCaption(req.body.caption, playerID);
        res.send({success: true})
    })

module.exports = router;