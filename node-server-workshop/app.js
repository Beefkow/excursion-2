var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var charactersRouter = require('./routes/characters');
const sqlite3 = require('sqlite3');
const cors = require('cors');


var app = express();

app.use (cors())

const db = new sqlite3.Database('characters.db', (ERROR) => {
  if(ERROR) {
    console.log('ERROR OPENING TABLE')
  } else {
    db.run(`CREATE TABLE characters(
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      name VARCHAR (15) NOT NULL,
      class VARCHAR (20) NOT NULL,
      strength INTEGER NOT NULL,
      agility INTEGER NOT NULL,
      intellect INTEGER NOT NULL,
      stamina INTEGER NOT NULL
    )`, (ERROR) => {
      if(ERROR){
        console.log('Table already exists!')
      } else {
        let insert = 'INSERT INTO characters (name, class, strength, agility, intellect, stamina) VALUES (?,?,?,?)';
        db.run(insert, ['Beefkow', 'Warrior', 3, 7, 2, 3]);
        db.run(insert, ['Holykow', 'Paladin', 8, 3, 7, 5]);
        db.run(insert, ['Deathkow', 'Death Knight', 7, 5, 10, 9]);
      }
    })
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/characters', charactersRouter );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
