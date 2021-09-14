'use strict';

const Errors = require('../errors');

module.exports = (req, res, next) => {
  next(new Errors.NotFound());
};
