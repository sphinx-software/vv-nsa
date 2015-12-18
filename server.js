require('dotenv').load();

var app = require('./app');

app.listen(process.env['APP_PORT'] || 3000);
