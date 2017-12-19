const { Router } = require('express');

const router = Router();

router.get('/adminka', (req, res) => {
    res.send('adminka page');
});



module.exports = router;