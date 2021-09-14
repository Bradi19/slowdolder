'use strict';

const mongoose = require('mongoose');
const mongooseI18n = require('mongoose-i18n-localize');
const constants = require('../constants');
const Schema = mongoose.Schema;

const VacancySchema = new Schema({
  title: {
    type: String,
    required: true,
    i18n: true,
  },
  longTitle: {
    type: String,
    i18n: true,
  },
  description: {
    type: String,
    i18n: true,
  },
  body: {
    type: String,
    i18n: true,
  },
  specialty: {
    type: String,
    enum: [
      'Front-end',
      'Full-stack',
      'Back-end',
      'DevOps',
      'Project management',
      'Design',
      'QA',
      'Other',
    ],
  },
  level: {
    type: String,
    enum: [
      'No level',
      'Trainee',
      'Junior',
      'Middle',
      'Senior',
    ],
  },
  hot: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
    default: () => new Date(),
  },
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
});

VacancySchema.plugin(mongooseI18n, {
  locales: constants.languages,
});

module.exports = mongoose.model('Vacancy', VacancySchema);
