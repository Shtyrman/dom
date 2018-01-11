const express = require('express');
const logger = require('morgan')

const domain = require('domain');
const appDomain = domain.create();

//const logger = require('./middleware/logger');
//const auth = require('./middleware/auth');
const config = require('./config');
const routers = require('./routers');

const app = express();


app.set('x-powered-by', false);
app.set('view engine', 'pug');
app.set('views', config.paths.views);

app.locals = Object.assign({}, app.locals, config);

app.use(express.static(config.paths.public));
app.use('/lib', express.static(config.paths.lib));

app.use(logger('dev'));


app.use(/^(.*?[^\/]+)$/, function (req, res) {
    res.redirect(301, req.params[0] + '/')
});
app.use('/', routers.main);
app.use('/uslugi', routers.uslugi);
app.use('/groups', routers.items);
//app.use('/blog'. routers.blog);
//app.use('/card', routers.card);
//app.use('/calc', routers.calc);
//app.use('/admin', routers.admin);

appDomain.on('error', function(err) {
    console.error("Домен перехватил %s", err);
});
appDomain.run(function () {
    app.listen(config.port, () => console.log('Express:', config.port));
});





