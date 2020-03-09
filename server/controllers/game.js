const express = require('express');

//path with ./ for something local
const quoteCards = require('../models/quoteCards');

//acts as a local controller
const router = express.Router();

router
    .get('/quoteCards', (req, res) => res.send(quoteCards));

module.exports = router;