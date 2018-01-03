const router = require('express').Router();

const { uslugi: {
    showAllUslugi,
    showUslugi
} } = require('../controllers');


router.get('/', showAllUslugi);
router.get('/:usluga', showUslugi);

module.exports = router;