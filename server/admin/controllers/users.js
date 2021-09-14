/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

module.exports = function (app) {
  app.use('/users', router);
};

// accept GET request on the admin user index via users/
router.get('/', (req, res, next) => {
  res.send('Got a GET request at admin/users/');
});

// accept POST request on the admin users index via users/
router.post('/', (req, res) => {
  res.send('Got a POST request at admin/users/');
});

// accept GET request on the admin users add via users/add
router.get('/add', (req, res, next) => {
  res.send('Got a GET request at admin/users/add');
});

// accept PUT request at the admin users add via users/add
router.put('/add', (req, res) => {
  res.send('Got a PUT request at admin/users/add');
});

// accept DELETE request at the admin users delete via users/delete
router.delete('/delete', (req, res) => {
  res.send('Got a DELETE request at admin/users/delete');
});
