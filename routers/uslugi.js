const router = require('express').Router();

const { usluga: {
    showAllUslugi,
    showUslugi
} };


router.get('/', showAllUslugi);
router.get('/:usluga', showUslugi);

module.exports = router;