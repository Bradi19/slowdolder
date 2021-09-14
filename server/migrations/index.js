'use strict';

const mongoose = require('mongoose');
const config = require('../../config');
const copyFilesToFolder = require('./copyFiles');
const updateOrCreate = require('./updateOrCreate');
const userModel = require('../models/user');
const vacancyModel = require('../models/vacancy');
const eventModel = require('../models/event');
const employeeModel = require('../models/employee');
const videoModel = require('../models/video');

mongoose.Promise = global.Promise;

const userFixtures = require('./fixtures/users.json');
const vacancyFixtures = require('./fixtures/vacancies.json');
const eventFixtures = require('./fixtures/events.json');
const employeeFixtures = require('./fixtures/employee.json');
const videoFixtures = require('./fixtures/videos.json');

// copy employee's foto from ./src/images/employee to ./uploads/empoyee
copyFilesToFolder('./server/migrations/fixtures/images/employee_foto', employeeModel.uploadDir());

mongoose.connect(config.db, { useMongoClient: true })
  .then(() => Promise.all([
    updateOrCreate(userModel, userFixtures, 'name'),
    employeeModel.remove()
      .then(() => employeeModel.create(employeeFixtures)),
    () => {
      if (config.env !== 'production') {
        return Promise.all([
          vacancyModel.remove(),
          eventModel.remove(),
          videoModel.remove(),
        ])
        .then(() => Promise.all([
          vacancyModel.create(vacancyFixtures),
          eventModel.create(eventFixtures),
          videoModel.create(videoFixtures),
        ]));
      }
    }
  ]))
  .then(() => console.log('Db was fullfilled successfully'))
  .catch(err => console.log(err))
  .then(() => mongoose.connection.close());
