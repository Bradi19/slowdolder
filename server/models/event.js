// 'use strict';

const path = require('path');
const mongoose = require('mongoose');
const mongooseI18n = require('mongoose-i18n-localize');
const config = require('../../config');
const constants = require('../constants');
const fsHelpers = require('../helpers/fsHelpers');

const { Schema } = mongoose;

const formatImgPath = fileName => `/${config.uploadBaseURL}/${config.events.upload}/${fileName}`;

const EventSchema = new Schema({
  title: {
    type: String,
    i18n: true,
    required: true,
  },
  thumbnail: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    i18n: true,
  },
  body: {
    type: String,
    i18n: true,
  },
  gallery: {
    type: [String],
    default: [],
  },
  publishedAt: {
    type: Date,
    default: () => new Date(),
  },
}, {
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id;
      ret.thumbnail = formatImgPath(ret.thumbnail);

      if (ret.gallery) {
        ret.gallery = ret.gallery.map(formatImgPath);
      }

      delete ret._id;
      delete ret.__v;
    },
  },
});

EventSchema.plugin(mongooseI18n, {
  locales: constants.languages,
});


// Virtuals

// EventSchema.virtual('thumbnailFilePath').get(() => {
//   return path.join(this.schema.statics.uploadDir(), this.thumbnail);
// });

// EventSchema.virtual('galleryFilePaths').get(() => {
//   const uploadDir = this.schema.statics.uploadDir();

//   return this.gallery.map(file => path.join(uploadDir, file));
// });


// Static methods

const uploadDir = path.join(config.uploadDir, config.events.upload);

EventSchema.statics.uploadDir = () => path.join(config.uploadDir, config.events.upload);

EventSchema.statics.normalizeFilePath = (fileName) => {
  return path.join(uploadDir, fileName);
};


// Instance methods

EventSchema.methods.clearFiles = function () {
  return Promise.all([
    this.clearThumbnailFile(),
    this.clearGalleryFiles(),
  ]);
};

EventSchema.methods.clearThumbnailFile = function () {
  const thumbnail = this.thumbnailFilePath;

  return fsHelpers.removeFile(thumbnail)
    .catch(err => {
      throw new Error(`Unable to delete event's thumbnail ${thumbnail}`);
    });
};

EventSchema.methods.clearGalleryFiles = function (files) {
  if (!Array.isArray(files) || files.length < 1) {
    files = this.gallery;
  }

  return Promise.all(files.map(file => {
    const filePath = this.schema.statics.normalizeFilePath(file);

    return fsHelpers.removeFile(filePath)
      .then(() => this.gallery.pull(file))
      .catch(err => {
        throw new Error(`Unable to delete event's gallery file ${file}`);
      });
  }));
};


module.exports = mongoose.model('Event', EventSchema);
