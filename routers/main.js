const router = require('express').Router();

const { main } = require('../controllers');

router.get('/', main.showMain);
router.get('/about', main.showAbout);
router.get('/price', main.showPrice);
router.get('/faq', main.showFaq);
router.get('/otzovu', main.showOtzovu);
router.get('/contact', main.showContact);
router.get('/search', main.showSearch);

module.exports = router;