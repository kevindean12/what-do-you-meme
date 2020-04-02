
const express = require('express');

const users = require('../models/Users');

//acts as a local controller
const router = express.Router();

router
    .post('/login', (req, res) => {
        try {
            const user = users.Login(req.body.email, req.body.password);
            res.send({...user, Password: undefined});
        } catch (error) {
            //401: unauthorized
            res.status(401).send({message: error.message});
        }
    })


module.exports = router;