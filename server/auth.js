'use strict';

const passport = require('passport');
const TokenStrategy = require('passport-token-auth');
const LocalStrategy = require('passport-local');
const Errors = require('./errors');
const User = require('./models/user');

passport.use(new LocalStrategy(
  (username, password, done) => User.findOne({ name: username })
    .then(user => {
      if (!user) {
        return done(new Errors.Bad('User not found'));
      }

      if (!user.checkPassword(password)) {
        return done(new Errors.Bad('Invalid password'));
      }

      return done(null, user);
    })
    .catch(done)
));

passport.use(new TokenStrategy(
  (token, done) => User.findOne({ token })
    .then(user => {
      if (!user) {
        return done(new Errors.Unauthorized());
      }

      return done(null, user);
    })
    .catch(done)
));

module.exports = passport;
