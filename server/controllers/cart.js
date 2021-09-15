'use strict';

const router = require('express').Router();
const Cart = require('../models/cart');
const checkLanguage = require('../middlewares/checkLanguege');

router.get('/', checkLanguage, (req, res, next) => {
    Cart.find()
    .sort('order')
    .then((cart) => {
      cart = Cart.schema.methods.toJSONLocalizedOnly(cart, req.lang);
      res.json(cart);
    })
    .catch(err => (
      next(err)
    ));
});

module.exports = router;