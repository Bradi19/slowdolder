'use strict';

const router = require('express').Router();
const Errors = require('../../errors');
const isAdmin = require('../../middlewares/isAdmin');
const Video = require('../../models/video');
const youtubeAPI = require('../../helpers/youtubeAPIService');

router.use(isAdmin);

router.get('/', (req, res, next) => {
  Video.find()
    .then(videos => {
      res.json(videos);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const youtubeHash = req.body.hash;

  youtubeAPI.getById(youtubeHash)
    .then(result => {
      const data = result.items.find(item => item.kind.search('video') !== -1);

      if (!data) {
        throw new Errors.NotFound('No video with this hash was found on youtube');
      }

      const snippet = data.snippet;

      return Video.create({
        youtubeHash,
        title: snippet.title,
        thumbnail: snippet.thumbnails.high.url,
        description: snippet.description,
        publishedAt: snippet.publishedAt,
      });
    })
    .then(video => {
      res.status(201);
      res.json(video);
    })
    .catch(next);
});

router.delete('/:hash', (req, res, next) => {
  Video.remove({ youtubeHash: req.params.hash })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;
