'use strict';

const fs = require('fs');
const config = require('../../config');

module.exports = message => {
  if (config.env === 'production') {
    const text = `${message}\n`;

    fs.appendFile(config.errorsFilePath, text, () => {});
  } else {
    console.log(message);
  }
};
