/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

module.exports = function (app) {
  app.use('/possitions', router);
};

// accept GET request on the admin post index via posts/
router.get('/', (req, res, next) => {
  res.send('Got a GET request at admin/possitions/');
});

// accept POST request on the admin posts index via posts/
router.post('/', (req, res) => {
  res.send('Got a POST request at admin/possitions/');
});

// accept GET request on the admin posts add via posts/add
router.get('/add', (req, res, next) => {
  res.send('Got a GET request at admin/posts/possitions');
});

// accept PUT request at the admin posts add via posts/add
router.put('/add', (req, res) => {
  res.send('Got a PUT request at admin/posts/possitions');
});

// accept DELETE request at the admin posts delete via posts/delete
router.delete('/delete', (req, res) => {
  res.send('Got a DELETE request at admin/possitions/delete');
});
