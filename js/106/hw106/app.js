var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('foo'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  let views = req.cookies.views ? JSON.parse(req.cookies.views) : 0;
  views++;
  res.locals.appearances = views;

  res.cookie('views', JSON.stringify(views), {
    maxAge: 20000,
  });

  next();
});

app.use((req, res, next) => {
  let users=req.cookies.users ;

  
    console.log(`logged in as ${users}`) 

  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

pp.post('/', (req, res, next) => {
  if (req.body.users === `${users}` ) {
    res.locals.Name=users;
  }

  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
