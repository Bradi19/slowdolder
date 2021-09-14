'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto');
const salt = require('../../config').salt;
const Schema = mongoose.Schema;

const createHash = value => crypto.createHash('sha256')
  .update(value)
  .update(salt)
  .digest('hex');

const UserSchema = Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    default: function() {
      return this.generateToken();
    },
  },
});

UserSchema.virtual('password').set(function(value) {
  this.passwordHash = createHash(value);
});

UserSchema.methods.checkPassword = function(password = '') {
  return this.passwordHash === createHash(password);
};
UserSchema.methods.generateToken = function() {
  return crypto.randomBytes(16).toString('hex');
}

module.exports = mongoose.model('User', UserSchema);
