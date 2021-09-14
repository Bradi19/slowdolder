// 'use strict';

const mongoose = require('mongoose');
const config = require('./../config');

const ENV = process.env.NODE_ENV || 'development';
mongoose.Promise = global.Promise;

mongoose.connect(config.db, {
  useMongoClient: true,
  /* other options */
})
  .then(() => {
    console.log('Mongoose connection open');
    config.env = ENV;

    const app = require('./app')(config);

    app.listen(config.port, err => {
      if (err) {
        throw err;
      }

      console.log(`Express server listening on port ${config.port}`);
    });
  }, () => {
    console.log(`Unable to connect to database at ${config.db}`);
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });
