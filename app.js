var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require ('express-session');
var logger = require('morgan');

//Rutas
const db = require('./database/models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productRouter = require('./routes/products');
const searchResultsRouter = require('./routes/search-results');
const profileRouter = require('./routes/profile');


// const router = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* antes de las rutas debemos configurar la session */


app.use(session({
  secret : 'myApp',
  resave : false,
  saveUninitialized : true
}));

/* pasar info al front - configuracion del locals */
app.use(function (req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user
   
    return next();
  }
  return next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productRouter)
app.use('/search', searchResultsRouter)
app.use('/profile', profileRouter)

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler

module.exports = app;

