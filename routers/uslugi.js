const router = require('express').Router({ strict: true, caseSensitive: true });

const { uslugi: {
    findUsluga,
    showAllUslugi,
    showUslugi
} } = require('../controllers');


router.get('/', showAllUslugi);
router.get('/:usluga/', findUsluga, showUslugi);

module.exports = router;