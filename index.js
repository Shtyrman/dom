const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// const domain = require('domain');
// const appDomain = domain.create();

//const logger = require('./middleware/logger');
//const auth = require('./middleware/auth');
const config = require('./config');
const routers = require('./routers');


const app = express();

app.set('view engine', 'pug');
app.set('views', config.paths.views);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.locals = Object.assign({}, app.locals, config);

app.use(express.static(config.paths.public));
app.use('/lib', express.static(config.paths.lib));

app.use(logger('dev'));

app.use('/', routers.main);
app.use('/uslugi', routers.uslugi);
app.use('/groups', routers.items);
//app.use('/blog'. routers.blog);
//app.use('/card', routers.card);
//app.use('/calc', routers.calc);
//app.use('/admin', routers.admin);

// appDomain.on('error', function(err) {
//     console.error("Домен перехватил %s", err);
// });
// appDomain.run(function () {
    app.listen(config.port, () => console.log('Express:', config.port));
// });





