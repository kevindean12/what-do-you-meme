const express = require('express');

//path with ./ for something local
const quoteCards = require('../models/quoteCards');

//acts as a local controller
const router = express.Router();

router
    .get('/quoteCards', (req, res) => res.send(quoteCards))
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.query.text);
        res.send(quoteCards.list[quoteCards.list.length - 1]);
    });

module.exports = router;