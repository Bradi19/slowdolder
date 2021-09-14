/* eslint-disable import/no-dynamic-require,import/no-dynamic-require,global-require,no-unused-vars,consistent-return,max-len */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('./auth');
const glob = require('glob');

const admin = express(); // the sub app

admin.set('views', path.join(__dirname, 'views'));
admin.set('view engine', 'ejs');
admin.use(passport.initialize());
admin.use(passport.session());
admin.use(logger('dev'));

const controllers = glob.sync(`${__dirname}/controllers/*.js`);
controllers.forEach((controller) => {
  require(controller)(admin);
});

// accept GET request on the admin index via /
admin.get('/', (req, res, next) => {
  // res.send('Got a GET request at /admin/');
  res.render('index', { title: 'Admin' });
});

// accept GET request on the admin dashboard via /dashboard
admin.get('/dashboard', (req, res, next) => {
  res.send('Got a GET request at /admin/dashboard');
});

// accept GET request on the admin login via /login
admin.get('/login', (req, res, next) => {
  // res.send('Got a GET request at /admin/login');
  console.log('auth');
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.render('login', { title: 'Login' });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.redirect('/admin');
    });
  })(req, res, next);
});

admin.post('/login', passport.authenticate('local', {
  failureRedirect: '/admin/login',
  successRedirect: '/admin',
}));

module.exports = admin;
