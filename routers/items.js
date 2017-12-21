const express = require('express');

const items = require('../data/item');

const router = express.Router();

// товары
router.get('/items', (req, res) => { 
    res.send(items);
});

router.get('/items/:id', function (req, res) {   
   let tip = items.find(tip => tip.id == req.params.id);

    res.send("категория:" + req.params["id"])
});
router.get('/items/:id/:itemId', function (req, res) {   
    let prod = items.find(prod => prod.itemId == req.params.itemId);
 
     res.send("продукт:" + req.params["itemId"])
});

module.exports = router;