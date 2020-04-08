const config = require('config');

module.exports = (req, _res, next) => {
    // Хранение в req.locals – рекомендованный способ
    req.locals = {
        meta: {
            charset: 'utf-8',
            description: 'Awesome notes'
        },
        title: 'Awesome notes',
        staticBasePath: config.get('staticBasePath'),
    };

    next();
};
