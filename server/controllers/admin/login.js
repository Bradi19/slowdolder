'use strict';

const router = require('express').Router();
const auth = require('../../auth');

router.post('/', auth.authenticate('local', { session: false }),
  (req, res, next) => {
    const user = req.user;
    const token = user.generateToken();

    user.token = token;

    return user.save()
      .then(() => res.json({ token }));
});

module.exports = router;
