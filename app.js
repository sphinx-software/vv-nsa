var container = require('electrolyte');
var express   = require('express');
var app       = express();

container.use(container.node_modules());
container.use(container.node('src'));
//TODO

module.exports = app;