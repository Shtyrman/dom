const { Router } = require('express');

const router = Router();

router.get('/card', (req, res) => {
    res.send('Card page');
});



module.exports = router;