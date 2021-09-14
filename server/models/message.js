/* eslint-disable import/newline-after-import,prefer-destructuring,no-underscore-dangle */
// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  email: String,
});

MessageSchema.virtual('date')
  .get(function () {
    return this._id.getTimestamp();
  });

mongoose.model('Message', MessageSchema);

