'use strict';
const path = require('path');


module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1512031511257_7937';

  // add your config here
  config.middleware = [];


  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  exports.static = {
    prefix: '',
    dir: path.join(appInfo.baseDir, 'app/public'),
    // support lazy load
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };

  return config;
};
