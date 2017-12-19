const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Main page');
});
router.get('/about', (req, res) => {
    res.send('About page');
});
router.get('/price', (req, res) => {
    res.send('price page');
});
router.get('/faq', (req, res) => {
    res.send('FAQ page');
});
router.get('/otzovu', (req, res) => {
    res.send('Otzovu page');
});
router.get('/contacts', (req, res) => {
    res.send('Contactu page');
});
router.get('/profile', (req, res) => {
    let user = req.user;   // согласно уроку, тут что-то по логину и паролю из другого маршрута
    console.log(user);

    res.send('Profile page');
});
router.get('/search', (req, res) => {
    res.send('search page');
});
router.get('/404', (req, res) => {
    res.send('404 page');
});

module.exports = router;