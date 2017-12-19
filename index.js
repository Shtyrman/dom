const express = require('express');

const logger = require('./middleware/logger');
const auth = require('./middleware/auth');

// страницы: главная, о нас, контакты, faq, прайс, отзовы, 404?, sitemap?
// профиль пользователя - возможность вносить контактные данные\реквизиты\адрес, просмотр\история заказов; не оч понимаю, кидать ли его через авторизацию для админкию
// страница поиска?
const maintRouter = require('./routers/main'); 
// предоставляемые услуги (широкий спектр услуг)
const uslugiRouter = require('./routers/uslugi'); 
// товары, которые можно приобрести онлайн
const itemRouter = require('./routers/items'); 
// блог компании (всякая тематическая информация)
const blogRouter = require('./routers/blog'); 
// корзина - check out - оплата (сюда бы формирования счета в пдф и отправку для идеала) - завершающая 
const cardRouter = require('./routers/card'); 
// калькулятор изделия (он у меня реализован уже php, js и все через ajax выводится)
// далее, под расчет пользователя формируется письмо и отправляется мне и ему на почту, просто как текст...
// вот сейчас подумал что в идеале лучше бы это дело слать в корзину все же, да?
const calcRouter = require('./routers/calc'); 
// auth/adminka
const adminRouter = require('./routers/admin');


const server = express();

server.use(
    logger, // потавил самым первым, т.к. в mainRouter страница профиля пользователя
    maintRouter, // просто страницы
    uslugiRouter, // /uslugi - услуши компании
    itemRouter, // /item - товары
    blogRouter, // /blog - блог
    cardRouter, // /card - корзина
    calcRouter, // /calc - кулькулятор
    auth,       
    adminRouter // /admin - админка
);


server.listen(3000, () => console.log('Express', 3000));