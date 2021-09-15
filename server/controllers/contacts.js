'use strict';

const router = require('express').Router();
const sendMail = require('../helpers/mail');

router.post('/', (req, res, next) => {
  const mailBody = `Заявка на курсы "${req.body.course}"\n\nИмя: ${req.body.name}\n Телефон: ${req.body.subject}\n Е-mail: ${req.body.email}`; // формат письма
  const mailBodyForClient = `Спасибо за заявку на "${req.body.course}". Мы скоро с вами свяжемся. <br><br>Есть срочный вопрос? <br>Напишите нам:<br>в мессенджере - <a target="_blank" href="https://m.me/INTShop">m.me/INTShop</a> <br>в телеграмме - <a target="_blank" href="https://t.me/INTShop">t.me/INTShop</a> <br>Или звоните: <br>по телефону +38 (050) 400-59-93 <br><br>С уважением,<br>команда INTShop`;
  sendMail({
    subject: `Ваша заявка на "${req.body.course}" принята!`,
    html: mailBodyForClient,
    client: req.body.email,
  }).then().catch(next);
  sendMail({
    subject: `Заявка на курсы "${req.body.course}"`,
    text: mailBody,
  })
    .then(() => res.json({
      success: true,
      message: 'Message sended successfully',
    }))
    .catch(next);
});

module.exports = router;
