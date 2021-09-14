'use strict';

const Errors = require('../errors');

module.exports = multerInstance => {
  return (req, res, next) => {
    return multerInstance(req, res, err => {
      if (err) {
        return next(new Errors.InternalError('Unable to upload files'));
      }

      return next();
    });
  };
};
