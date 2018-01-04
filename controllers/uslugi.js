const uslugi = require('../data/uslugi');

module.exports = {
    findUsluga(req, res, next) {
        let uslugaUrl = req.params.usluga;
        let usluga = uslugi.find(usluga => usluga.url === uslugaUrl);

        if (!usluga) {
            let error = new Error('Ничего нету');
            error.status = 404;
            next(error);
        } else {
            req.usluga = usluga;

            next();
        }
    },
    // GET /uslugi
    showAllUslugi(req, res) {
        res.render('sayt/page/main', {
            id: 'uslugi',
            title: 'Мои услуги'
        });
    },
    // GET /uslugi/:usluga
    showUslugi(req, res) {
        res.render('sayt/page/main', {
            id: 'usluga',
            title: req.usluga.usluga
        });
    }
};