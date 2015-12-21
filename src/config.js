var config = {};

config.app          = require('./../config/app');
config.sequelize    = require('./../config/sequelize');
config.mongoose     = require('./../config/mongoose');

module.exports = function () {
    return config;
};

module.exports['@singleton'] = true;
