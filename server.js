var express = require('express');
var api = require('./api.js');

var app = express();
var port = 8080;

api.initApi(app);
app.listen(port,'172.31.22.131');
console.log('Listening on port'+port);
//app.listen(port, () => console.log("Listening on " + port));
