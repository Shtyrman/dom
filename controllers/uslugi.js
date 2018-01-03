module.exports = router;

const usluga = require('../data/uslugi');

module.exports = {
    // GET /uslugi
    showAllUslugi(req, res) {
        res.render('sayt/page/main', {
            id: 'uslugi',
            title: 'CodeLibrary'
        });
    },
    // GET /uslugi/:usluga
    showUslugi(req, res) {
        res.render('sayt/page/main', {
            id: 'usluga',
            title: req.uslugi.usluga
        });
    }
};