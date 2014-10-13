var express      = require('express');
var chromeframe  = require('express-chromeframe');
var http         = require('http');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var os           = require('os');

var routes   = require('./routes');
var events   = require('./routes/events');
var review   = require('./routes/review');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// use and abuse
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
app.use(chromeframe());

// define routes
app.get('/', routes.index);
app.get('/events', events.list);
app.get('/events/:id', events.get);
app.get('/review', review.index);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

if (app.get('env') === 'development') {
  // development error handler
  // will print stacktrace
    app.locals.cdn = '/cdn';
    app.locals.pretty = true;
    app.locals.banner = 'dev: ' + os.hostname();
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else {
    // production error handler
    // no stacktraces leaked to user
    app.locals.cdn = 'https://s3.amazonaws.com/aws-intro/cdn';
    app.locals.pretty = false;
    app.locals.banner = '';
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


module.exports = app;
