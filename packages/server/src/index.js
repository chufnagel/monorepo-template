const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const favicon = require('serve-favicon');

const dist = path.join(__dirname, '../client/dist');
const logger = require('./logger');

const app = express();

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(compression())
  .use(morgan('combined', { stream: logger.stream }));


// app.use(favicon(`${dist}/favicon.ico`));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/', (req, res) => {
  res.send(`${dist}/index.html`);
});


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stack trace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stack traces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  });
});

module.exports = app;
