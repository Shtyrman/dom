const express = require('express');

const items = require('../data/item');

const router = express.Router();

// товары
router.get('/items', (req, res) => { 
    res.send(items);
});

router.get('/items/:catId', function (req, res) {   
   let tip = items.find(tip => tip.catId == req.params.catId);

    res.send("категория:" + req.params["catId"])
});
router.get('/items/:catId/:itemId', function (req, res) {   
    let prod = items.find(prod => prod.itemId == req.params.itemId);
 
     res.send("продукт:" + req.params["itemId"])
});

module.exports = router;