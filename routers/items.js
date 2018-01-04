

const router = require('express').Router();

const { items: {
    findItem,
    showAllGroup,
    showGroupItems
 //   showIdItem
} } = require('../controllers');


router.get('/', showAllGroup);
router.get('/:catId', findItem, showGroupItems);
//router.get('/:catId/:itemId', showIdItem);

module.exports = router;