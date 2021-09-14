'use strict';

const router = require('express').Router();
const _ = require('lodash');
const Event = require('../models/event');
const Video = require('../models/video');
const checkLanguage = require('../middlewares/checkLanguege');

router.get('/', checkLanguage, (req, res, next) => {
  Promise.all([
    Event.find()
      .select('-body -gallery')
      .then(events => Event.schema.methods.toJSONLocalizedOnly(events, req.lang)),
    Video.find(),
  ])
    .then(result => {
      const blogList = _.chain(result)
        .flatten()
        .orderBy('publishedAt', 'desc')
        .value();

      res.json(blogList);
    })
    .catch(next);
});

module.exports = router;
