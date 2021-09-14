'use strict';

const constants = require('../constants');

module.exports = (req, res, next) => {
  let lang = req.query.lang;

  if (!(constants.languages.includes(lang))) {
    lang = constants.defaultLanguage;
  }

  req.lang = lang;

  next();
};
