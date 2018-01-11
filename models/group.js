const groups = require('../data/groups');

class Group {
    static find() {
        return Promise.resolve(groups);
    }
    constructor () {

    }
}

module.exports = Group;