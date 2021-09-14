'use strict';

const router = require('express').Router();

router.use('/login', require('./login'));
router.use('/vacancies', require('./vacancies'));
router.use('/events', require('./events'));
router.use('/video', require('./video'));

module.exports = router;
