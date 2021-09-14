'use strict';

const router = require('express').Router();
const Event = require('../models/event');
const Errors = require('../errors');
const checkLanguage = require('../middlewares/checkLanguege');
const paginatorParams = require('../middlewares/paginatorParams');

const paginate = paginatorParams({
  start: 1,
  limit: 5,
});

router.get('/:id', checkLanguage, paginate,
  (req, res, next) => {
    Event.findById(req.params.id)
      .then(event => {
        if (!event) {
          throw new Errors.NotFound('Event doesn\'t exist');
        }

        event = Event.schema.methods.toJSONLocalizedOnly(event, req.lang);
        res.json(event);
      })
      .catch(next);
  });

router.get('/', checkLanguage, paginate,
  (req, res, next) => {
    Event.find()
      .sort({ publishedAt: -1 })
      .skip(req.start - 1)
      .limit(req.limit)
      .then(events => {
        events = Event.schema.methods.toJSONLocalizedOnly(events, req.lang);
        res.json(events);
      })
      .catch(next);
});

router.get('/count', (req, res, next) => {
    Event.count()
      .then(count => {
        res.json({ count });
      })
      .catch(next);
});

module.exports = router;
