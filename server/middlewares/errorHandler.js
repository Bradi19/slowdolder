'use strict';

const mongoose = require('mongoose');
const logger = require('../helpers/logger');

module.exports = (err, req, res, next) => {
  if (err instanceof mongoose.Error.ValidationError) {
    err.status = 400;
  }

  if (typeof err.status !== 'number') {
    err.status = 500;
  }

  if (err.status === 500) {
    const errorText = `${err.message}\n${err.stack}\n`;

    logger(errorText);
  }

  res.status(err.status);
  res.json({ message: err.message });
};
