'use strict';

const Promise = require('bluebird');

module.exports = (model, fixtures, findByField) =>
  Promise.map(fixtures, fixture => {
    return model.findOne({
      [findByField]: fixture[findByField],
    })
      .then(item => {
        if (!item) {
          return model.create(fixture);
        }

        Object.assign(item, fixture);

        return item.save();
      });
  });
