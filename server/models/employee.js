// 'use strict';

const path = require('path');
const mongoose = require('mongoose');
const mongooseI18n = require('mongoose-i18n-localize');
const config = require('../../config');
const constants = require('../constants');
const { Schema } = mongoose;

const formatImgPath = fileName => `/${config.uploadBaseURL}/${config.employee.upload}/${fileName}`;

const EmployeeSchema = new Schema({
  fullName: {
    type: String,
    i18n: true,
    required: true,
  },
  hovered: {
    type: String,
    default: 'ava2.jpg',
  },
  foto: {
    type: String,
    default: 'ava2.jpg',
  },
  shortDescription: {
    type: String,
    i18n: true,
  },
  longDescription: {
    type: String,
    i18n: true,
  },
  order: {
    type: Number,
  },
  date: Date,
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      ret.foto = formatImgPath(ret.foto);
      ret.hovered = formatImgPath(ret.hovered);
      delete ret._id;
      delete ret.__v;
    },
  },
});

EmployeeSchema.plugin(mongooseI18n, {
  locales: constants.languages,
});

EmployeeSchema.statics.uploadDir = () => path.join(config.uploadDir, config.employee.upload);

module.exports = mongoose.model('Employee', EmployeeSchema);
