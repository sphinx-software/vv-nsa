var container       = require('electrolyte');
var containerConfig = require('./config/container');

// Loads node_modules as vendor services
if (containerConfig['node_modules']) {
    container.use(container.node_modules());
}

// Loads other package in the configuration file
containerConfig.use.forEach(function (packageRoot) {
    container.use(container.node(packageRoot));
});

/**
 *
 * @type {Container}
 */
module.exports = container;
