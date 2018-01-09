const items = require('../data/items');
const groups = require('../data/groups');

module.exports = {
    findItem(req, res, next) {
        let item = items.find(item => item.slug === req.params.itemSlug);

        if (!item) {
            let error = new Error('Ничего нету');
            error.status = 404;
            next(error);
        } else {
            req.item = item;

            next();
        }
    },
    // GET /groups
    showAllGroups(req, res) {
        res.render('sayt/page/main', {
            id: 'allgroup',
            title: 'Все группы',
            groups
        });
    },
    // GET /groups/:group
    showItemsByGroup(req, res) {
        let group = groups.find(group => group.slug == req.params.groupSlug)
        let itemsByGroup = items.filter(item => item.groupId == group.id);
        
        res.render('sayt/page/main', {
            id: 'Groups',
            title: `Товары по ${group.title}`,
            group, itemsByGroup
        });
    },
    // GET /groups/:group/:item
    showItem(req, res) {
        console.log(req.query.type)  ///groups/moe/steklo?type=red
        res.render('sayt/page/main', {
            id: 'itemId',
            title: req.item.title,
            item: req.item
        });
    }
};