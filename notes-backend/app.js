var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require("mysql2");

var indexRouter = require('./routes/index');
var documentRouter = require('./routes/document');

var app = express();

app.locals.con = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "notes",
    password: "notes",
    database: "notes"
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/document', documentRouter);

module.exports = app;
