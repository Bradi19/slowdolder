'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = Schema({
  youtubeHash: {
    type: String,
    required: true,
    unique: true,
  },
  title: String,
  thumbnail: String,
  description: String,
  publishedAt: {
    type: Date,
    default: () => new Date(),
  },
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
    },
  },
});

module.exports = mongoose.model('Video', VideoSchema);
