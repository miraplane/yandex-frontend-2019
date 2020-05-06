require('isomorphic-fetch');

const path = require('path');

const bodyParser = require('body-parser');
const config = require('config');
const express = require('express');
const morgan = require('morgan');
const next = require('next');

const render = require('./middlewares');
const routes = require('./routes');

const server= express();
const app = next({dev: process.env.NODE_ENV !== 'production'});

const publicDir = path.join(__dirname, '/public');

if (config.get('debug')) {
    server.use(morgan('dev'));
}

server.use(express.static(publicDir));
server.use(bodyParser.json());

server.use((err, _req, _res, next) => {
    console.error(err.stack);

    next();
});

server.use(render(app));

routes(server);

server.use((err, _req, res) => {
    console.error(err.stack);

    res.sendStatus(500);
});

app.prepare().then(() => {
    const host = config.get('host');
    const port = config.get('port');

    server.listen(port, host, () => {
        console.info(`Server started on ${port}`);
        console.info(`Open http://${host}:${port}/`);
    });
});

