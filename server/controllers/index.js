'use strict';

const router = require('express').Router();

router.use('/admin', require('./admin'));

router.use('/vacancies', require('./vacancies'));
router.use('/blog', require('./blog'));
router.use('/events', require('./events'));
router.use('/gallery', require('./gallery'));
router.use('/contacts', require('./contacts'));
router.use('/employee', require('./employee'));
router.use('/video', require('./video'));

module.exports = router;
