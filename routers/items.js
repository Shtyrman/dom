const express = require('express');

const items = require('../data/item');

const router = express.Router();

// товары
router.get('/items', (req, res) => { 
    res.send(items);
});


// категории товаров
router.get('/items/:id', function (req, res) {   
    let tip = items.find(tip => tip.id == req.params.id);

    res.send("itemId:" + req.params["id"])
});
// вот сами товары получаются в категории же, да?
//
// Пробовал вот такую конструкцию, типа категория/товар - но чет не получалось
//
//router.get('/items/:categoryId/:id', function (req, res) {   
//
//    let catId = item.find(catId => catId.id == req.params.id);
//    let prodId = item.find(proId => prodId.product == req.params.product);
//
//   response.send(`Категория: ${catId}    Товар: ${prodId}`);
//});
// и в item.json [{ "id": categorija1, "product": "product1"}

module.exports = router;