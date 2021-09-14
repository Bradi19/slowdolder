'use strict';

const Errors = require('../errors');

module.exports = (defaultValues) => {
  return (req, res, next) => {
    let start = req.query.start;
    let limit = req.query.limit;

    start = (start !== undefined) ? Number(start) : defaultValues.start;
    limit = (limit !== undefined) ? Number(limit) : defaultValues.limit;

    if (!isFinite(start) || start < 1) {
      return next(new Errors.Bad('Start parameter is invalid'));
    }

    if (!isFinite(limit) || limit < 1) {
      return next(new Errors.Bad('Limit parameter is invalid'));
    }

    req.start = start;
    req.limit = limit;

    next();
  };
};
