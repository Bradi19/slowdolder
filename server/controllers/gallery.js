'use strict';

const router = require('express').Router();
const Event = require('../models/event');
const checkLanguage = require('../middlewares/checkLanguege');

router.get('/', checkLanguage, (req, res, next) => {
  Event.find()
    // .select('gallery -_id')
    .then(eventsGalleries => {
      eventsGalleries = Event.schema.methods.toJSONLocalizedOnly(eventsGalleries, req.lang);

      const gallery = eventsGalleries.reduce((common, item) => {
        const gallery = item.gallery.map(photo => {
          return {
            title: item.title,
            publishedAt: item.publishedAt,
            thumbnail: photo,
          };
        });

        return common.concat(gallery);
      }, []);

      res.json(gallery);
    })
    .catch(next);
});

module.exports = router;
