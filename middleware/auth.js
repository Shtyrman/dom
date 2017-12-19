const { auth: { login, password } } = require('../config');

module.exports = (req, res, next) => {
    if (req.query.login === login && req.query.password === password) {
        let user = { lgoin };
        
        req.user = user;

        next();
    }
     else {
        res.send('Lock');
     }
};