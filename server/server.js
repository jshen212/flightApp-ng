var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

require('./routes/routes.js')(app, express);

app.listen(3000);
console.log('server listening on port: 3000');

module.exports = app;
