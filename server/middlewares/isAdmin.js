'use strict';

const auth = require('../auth');

module.exports = auth.authenticate('token', { session: false });
