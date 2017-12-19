const express = require('express');

const blog = require('../data/blog');

const router = express.Router();

router.get('/blog', (req, res) => {
    res.send(items);
});

router.get('/blog/:blog', (req, res) => {
    res.send(blog[0]); 
});

module.exports = router;