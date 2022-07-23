const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const cymbalRouter = require('./routes/cymbals');
const pokeRouter = require('./routes/pokemon');
const {dbConnection} = require('./db/db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cymbals', cymbalRouter);
app.use('/pokemon', pokeRouter);
dbConnection()

module.exports = app;
