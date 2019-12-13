var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//rutas de modelos
//Rutas para platos
var platosAPIRouter = require('./routes/api/platos');
//Rutas para promociones
var promosAPIRouter = require('./routes/api/promociones');
//Rutas para critica
var criticaAPIRouter = require('./routes/api/critica');
//Rutas para lideres
var lideresAPIRouter = require('./routes/api/lideres');

var app = express();


//Mongo
mongoose.connect('mongodb://localhost/restaurante', {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

//errores
db.on("error", console.error.bind("Error de conexion con MongoDB"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);

//platos
//platosAPIRouter
app.use('/api/platos', platosAPIRouter);
//promosAPIRouter
app.use('/api/promociones', promosAPIRouter);
//criticaAPIRouter
app.use('/api/critica', criticaAPIRouter);
//lideresAPIRouter
app.use('/api/lideres', lideresAPIRouter);


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
