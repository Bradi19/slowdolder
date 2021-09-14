'use strict';

const crypto = require('crypto');
const fileExt = require('file-extension');
const Errors = require('../errors');

module.exports = {
  fileFilters: {
    image: (req, file, cb) => {
      if (!/^image/i.test(file.mimetype)) {
        return cb(new Errors.Bad('Uploaded file is not an image'));
      }

      return cb(null, true);
    },
    document: (req, file, cb) => {
      if (!/\.(pdf|doc(x)?)/i.test(file.originalname)) {
        return cb(new Errors.Bad('Uploaded file is not pdf or doc(x)'));
      }

      return cb(null, true);
    },
  },
  fileName: (req, file, cb) => {
    const ext = fileExt(file.originalname);
    const fileName = `${crypto.randomBytes(16).toString('hex')}.${ext}`;

    cb(null, fileName);
  },
};
