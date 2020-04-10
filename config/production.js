'use strict';

const packageMeta = require('../package.json');

module.exports = {
    debug: false,
    host: process.env.HOST,
    port: process.env.PORT,
    staticBasePath: `//${packageMeta.name}.surge.sh/`
};
