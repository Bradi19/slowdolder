'use strict';

const router = require('express').Router();
const Video = require('../models/video');

router.get('/', (req, res, next) => {
  Video.find()
    .then(videos => {
      res.json(videos);
    })
    .catch(next);
});

module.exports = router;
