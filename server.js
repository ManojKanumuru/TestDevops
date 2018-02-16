'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log(`env is :${env}`);

const hostname = '127.0.0.1', port = 3001;

require('./src/commons/routes.js')(app);

app.listen(port, () => {
    console.log("Listening on port 3000");
});