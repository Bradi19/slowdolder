// 'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compress = require('compression');

const passport = require('./auth');
const controllers = require('./controllers');
const notFoundHandler = require('./middlewares/notFoundHandler');
const errorHandler = require('./middlewares/errorHandler');

module.exports = (config) => {
  const ENV = config.env;

  const app = express();
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 204
  };
  app.use(cors(corsOptions));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.initialize());

  if (ENV === 'production') {
    app.use(compress());
    app.use(express.static(path.join(__dirname, '/public')));
  }

  if (ENV === 'development') {
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(logger('dev'));
    app.use('/uploads', express.static(config.uploadDir));
  }

  app.use(controllers);

// app.get('/', (req, res) => {
//     return res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
