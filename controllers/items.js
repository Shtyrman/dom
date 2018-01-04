const items = require('../data/item');

module.exports = {
    findItem(req, res, next) {
        let catIdUrl = req.params.catId;
        let catId = items.find(catId => catId.url === catIdUrl);

        if (!catId) {
            let error = new Error('Ничего нету');
            error.status = 404;
            next(error);
        } else {
            req.catId = catId;

            next();
        }
    },
    // GET /allgroup
    showAllGroup(req, res) {
        res.render('sayt/page/main', {
            id: 'allgroup',
            title: 'Все группы'
        });
    },
    // GET /allgroup/:catId
    showGroupItems(req, res) {
        res.render('sayt/page/main', {
            id: 'catId',
            title: req.catId.catId
        });
    }
    // GET /allgroup/:catId/:itemId
//    showGroupItems(req, res) {
//        res.render('sayt/page/main', {
 //           id: 'iditem',
 //           title: req.usluga.usluga
 //       });
 //   }
};