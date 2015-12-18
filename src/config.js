var config = {};

config.app          = require('./../config/app');
config.sequelize    = require('./../config/sequelize');

module.exports = function () {
    return config;
};

module.exports['@singleton'] = true;
