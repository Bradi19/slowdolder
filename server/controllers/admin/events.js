'use strict';

const router = require('express').Router();
const multer = require('multer');
const config = require('../../../config');
const Errors = require('../../errors');
const isAdmin = require('../../middlewares/isAdmin');
const Event = require('../../models/event');
const multerMiddleware = require('../../middlewares/multer');
const toDotNotation = require('../../helpers/dotize');
const multerHelpers = require('../../helpers/multerHelpers');

const multerOptions = {
  fileFilter: multerHelpers.fileFilters.image,
  storage: multer.diskStorage({
    destination: Event.uploadDir(),
    filename: multerHelpers.fileName,
  }),
};

const thumbnailMulterMiddleware = multer(
  Object.assign({}, multerOptions, {
    limits: {
      fileSize: config.events.maxSize.thumbnail,
    },
  })
).single('thumbnail');
const galleryMulterMiddleware = multer(
  Object.assign({}, multerOptions, {
    limits: {
      fileSize: config.events.maxSize.gallery,
    },
  })
).array('gallery');

router.use(isAdmin);

router.param('id', (req, res, next, id) => {
  return Event.findById(req.params.id)
    .then(event => {
      if (!event) {
        throw new Errors.NotFound('Event not found');
      }

      req.event = event;

      return next();
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  Event.find()
    .sort({ publishedAt: -1 })
    .then(events => {
      res.json(events);
    })
    .catch(next);
});

router.post('/',
  thumbnailMulterMiddleware,
  (req, res, next) => {
    Promise.resolve()
      .then(() => {
        const doc = Object.assign({}, JSON.parse(req.body.data));

        delete doc.thumbnail;
        delete doc.gallery;

        if (req.file) {
          doc.thumbnail = req.file.filename;
        }

        return Event.create(doc);
      })
      .then(() => {
        res.sendStatus(201);
      })
      .catch(next);
});

router.put('/:id',
  thumbnailMulterMiddleware,
  (req, res, next) => {
    const event = req.event;
    let doc = {};

    if (req.body.data) {
      doc = Object.assign({}, JSON.parse(req.body.data));
    }

    delete doc.thumbnail;
    delete doc.gallery;

    return (async () => {
      if (req.file) {
        doc.thumbnail = req.file.filename;

        await event.clearThumbnailFile();
      }

      doc = toDotNotation(doc);

      return event.update(doc);
    })()
    .then(() => res.sendStatus(204))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const event = req.event;

  return event.clearFiles()
    .then(() => event.remove())
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});

router.put('/:id/gallery',
  galleryMulterMiddleware,
  (req, res, next) => {
    const event = req.event;
    // const files = req.files.map(file => file.filename);

    req.files.forEach(file => event.gallery.addToSet(file.filename));

    // event.gallery.addToSet(files);

    return event.save()
      .then(() => res.sendStatus(204))
      .catch(next);
});

router.delete('/:id/gallery', (req, res, next) => {
  const event = req.event;
  const files = req.body;

  return event.clearGalleryFiles(files)
    .then(() => event.save())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
