var express = require('express');

var api = require('./api.js');
bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 3000;

api.initApi(app);
//app.listen(port,'172.31.22.131');
//console.log('Listening on port'+port);
app.listen(port, () => console.log("Listening on " + port));
