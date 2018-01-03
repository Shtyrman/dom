const express = require('express');
const logger = require('morgan')

//const logger = require('./middleware/logger');
//const auth = require('./middleware/auth');
const config = require('./config');
const routers = require('./routers');

const app = express();

app.set('view engine', 'pug');
app.set('views', config.paths.views);

app.locals = Object.assign({}, app.locals, config);

app.use(express.static(config.paths.public));
app.use('/lib', express.static(config.paths.lib));

app.use(logger('dev'));

app.use('/', routers.main);
app.use('/usluga', routers.uslugi);
//app.use('/items', routers.items);
//app.use('/blog'. routers.blog);
//app.use('/card', routers.card);
//app.use('/calc', routers.calc);
//app.use('/admin', routers.admin);


app.listen(config.port, () => console.log('Express:', config.port));



