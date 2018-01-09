const router = require('express').Router();

const { items } = require('../controllers');


router.get('/', items.showAllGroups);
router.get('/:groupSlug', items.showItemsByGroup);
router.get('/:groupSlug/:itemSlug', items.findItem, items.showItem);


module.exports = router;

//allgroup