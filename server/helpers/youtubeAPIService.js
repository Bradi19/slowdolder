'use strict';

const Promise = require('bluebird');
const Youtube = require('youtube-node');
const youtubeAPIKey = require('../../config').youtubeAPIKey;

let youtube = new Youtube();

youtube.setKey(youtubeAPIKey);

youtube.getById = Promise.promisify(youtube.getById);

module.exports = youtube;
