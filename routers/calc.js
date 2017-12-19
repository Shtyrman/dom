const { Router } = require('express');

const router = Router();

router.get('/calc', (req, res) => {
    res.send('Calkuljator page');
});



module.exports = router;