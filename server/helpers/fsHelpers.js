'use strict';

const fs = require('fs');

module.exports = {
  removeFile: filePath => {
    return new Promise((resolve, reject) => {
      fs.unlink(filePath, (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      });
    });
  }
};
