'use strict';

const config = require('config');

module.exports = {
    assetPrefix: config.get('staticBasePath'),
    distDir: 'src/public/_next',
    useFileSystemPublicRoutes: false
};
