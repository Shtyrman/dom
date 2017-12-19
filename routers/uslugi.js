const express = require('express');

const uslugi = require('../data/uslugi');

const router = express.Router();

router.get('/uslugi', (req, res) => {
    res.send(uslugi);
});

router.get('/uslugi/:usluga', (req, res) => {
    res.send(uslugi[0]); 
});

module.exports = router;