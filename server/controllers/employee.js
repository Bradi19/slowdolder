'use strict';

const router = require('express').Router();
const Employee = require('../models/employee');
const checkLanguage = require('../middlewares/checkLanguege');

router.get('/', checkLanguage, (req, res, next) => {
  Employee.find()
    .sort('order')
    .then((employees) => {
      employees = Employee.schema.methods.toJSONLocalizedOnly(employees, req.lang);
      res.json(employees);
    })
    .catch(err => (
      next(err)
    ));
});

module.exports = router;
