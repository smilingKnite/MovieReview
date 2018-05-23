var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = require('./server/config/mongoose.js')
var schema = require('./server/models/schema.js');

var Pet = schema.model;

app.use(bodyParser.json());
var path = require('path');
app.use(express.static(__dirname + '/public/dist/public'));


app.set('views', path.join(__dirname, './static/views'));

require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
});
