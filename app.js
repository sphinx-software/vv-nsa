var container = require('./container');
var express   = require('express');
var app       = express();

app.set('container', container);

// Application routing
app.use(container.create('http/router'));

module.exports = app;
