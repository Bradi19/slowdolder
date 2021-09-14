'use strict';

const router = require('express').Router();
const isAdmin = require('../../middlewares/isAdmin');
const Vacancy = require('../../models/vacancy');
const toDotNotation = require('../../helpers/dotize');

router.use(isAdmin);

router.get('/', (req, res, next) => {
  Vacancy.find()
    .sort({ publishedAt: -1 })
    .then(vacancies => {
      res.json(vacancies);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Vacancy.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  const body = toDotNotation(req.body);

  Vacancy.updateOne({ _id: req.params.id }, body)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Vacancy.remove({ _id: req.params.id })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;
