const { Router } = require('express');

const router = Router();

router.get('/admin', (req, res) => {
    res.send('Adminka page');
});

module.exports = router;