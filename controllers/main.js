module.exports = {
    showMain(req, res) {
        res.render('sayt/page/main', {
            id: 'main',
            title: 'Main page'
        });
    },
    showAbout(req, res) {
        res.render('sayt/page/main', {
            id: 'about',
            title: 'About Page'
        });
    },
    showPrice(req, res) {
        res.render('sayt/page/main', {
            id: 'price',
            title: 'Price Page'
        });
    },
    showFaq(req, res) {
        res.render('sayt/page/main', {
            id: 'faq',
            title: 'Faq Page'
        });
    },
    showOtzovu(req, res) {
        res.render('sayt/page/main', {
            id: 'otzovu',
            title: 'Otzovu Page'
        });
    },
    showContact(req, res) {
        res.render('sayt/page/main', {
            id: 'contact',
            title: 'Contact Page'
        });
    },
    showSearch(req, res) {
        res.render('sayt/page/main', {
            id: 'search',
            title: 'Search Page'
        });
    }
};