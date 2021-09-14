"use strict";

const nodemailer = require("nodemailer");
// const pug = require('pug');
const Promise = require("bluebird");
const config = require("../../config");
const emailConfig = config.email;

const transport = nodemailer.createTransport(config.email.transport);

Promise.promisify(transport.sendMail, transport);

/**
 * Send mail
 * @param {Object} options : subject, (html | text), attachments
 */

module.exports = options => {
  const { subject, html, text, attachments } = options;
  const sendTo = options.client ? options.client : emailConfig.recievers;

  const mailOptions = {
    sender: emailConfig.sender,
    from: emailConfig.sender,
    to: sendTo,
    subject: options.subject
  };

  if (html) {
    mailOptions.html = html;
  } else if (text) {
    mailOptions.text = text;
  }

  if (attachments) {
    mailOptions.attachments = attachments;
  }

  return transport.sendMail(mailOptions);
};
