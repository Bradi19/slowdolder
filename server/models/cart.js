'use strict';

const mongoose = require('mongoose');
const mongooseI18n = require('mongoose-i18n-localize');
const constants = require('../constants');
const Schema = mongoose.Schema;

const Cart = new Schema({
    idUser: {
        type: 'integer',
    },
    idProduct: {
        type: 'integer',
    },
    idOrder: {
        type: 'integer',
        defaultValue: 0,
    },
    title: {
        type: 'string',
        i18n: true,
    }
});

Cart.plugin(mongooseI18n, {
    locales: constants.languages,
  });
  
module.exports = mongoose.model('Cart', Cart);