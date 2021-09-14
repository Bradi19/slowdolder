'use strict';

const router = require('express').Router();
const Promise = require('bluebird');
const multer = require('multer');
const config = require('../../config');
const Vacancy = require('../models/vacancy');
const checkLanguage = require('../middlewares/checkLanguege');
const multerMiddleware = require('../middlewares/multer');
const multerHelpers = require('../helpers/multerHelpers');
const sendMail = require('../helpers/mail');

const resumeMulterMiddleware = multerMiddleware(
  multer({
    fileFilter: multerHelpers.fileFilters.document,
    limits: {
      fileSize: config.vacancies.maxSize.resume,
    },
  }).single('resume')
);

const checkName = (name) => {
  const applicantName = name.trim();
  if (!name) return true;
  if (typeof applicantName !== 'string') throw new Error('Wrong name field type');
  if (!applicantName.match(/^[a-zA-Zа-яА-ЯёЁ]{2}[a-zA-Zа-яА-ЯёЁ\-\s]{0,28}$/)) throw new Error('Wrong name');
  if (applicantName.length < 2 || applicantName.length > 25) throw new Error('Wrong name length');

  return true;
};

const checkPhoneNumber = (phoneNumber) => {
  const applicantPhoneNumber = phoneNumber.trim();
  if (typeof applicantPhoneNumber !== 'string') throw new Error('Wrong phone number type');
  if (applicantPhoneNumber.length !== 19) throw new Error('Wrong phone number length');
  if (!applicantPhoneNumber.match(/^\+380\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/)) throw new Error('Wrong phone number format');

  return true;
};

router.get('/', checkLanguage,
  (req, res, next) => {
    Vacancy.find()
      .sort({ publishedAt: -1 })
      .then(vacancies => {
        vacancies = Vacancy.schema.methods.toJSONLocalizedOnly(vacancies, req.lang);
        res.json(vacancies);
      })
      .catch(next);
});

router.post('/',
  checkLanguage,
  resumeMulterMiddleware,
  (req, res, next) => {
    const textData = JSON.parse(req.body.body);
    // сформировать строку распарсит req.body будут доступны поля

    Promise.try(() => {
      const id = textData.vacanceID;

      if (id) {
        return Vacancy.findById(textData.vacanceID)
          .then(vacancy => Vacancy.schema.methods.toJSONLocalizedOnly(vacancy, req.lang));
      }

      return;
    })
      .then(vacancy => {
        const mailText = `\nВакансия: ${vacancy ? vacancy.title : 'не указана'} \n
          Имя: ${textData.name} \n
          e-mail: ${textData.email} \n
          Сопроводительное письмо: ${textData.message} \n
          Ссылка на резюме: ${textData.cvLink}`;
        const subjectText = `Резюме кандидата ${textData.name} ${vacancy ? ` на вакансию: ${vacancy.title}` : ''}`;

        const sendMailForm = {
          subject: subjectText,
          text: mailText,
        };
        if (req.body.resume !== 'null' && req.body.resume !== null && req.body.resume !== '') {
          sendMailForm.attachments = {
            filename: req.file.originalname,
            content: req.file.buffer,
          };
        }
        return sendMail(sendMailForm);
      })
      .then(() => res.json({
        success: true,
        message: 'Message sended successfully',
      }))
      .catch(next);
});

router.post('/callBack',
    checkLanguage,
    resumeMulterMiddleware,
    (req, res, next) => {
        const { name, phoneNumber, vacancyId } = req.body;

        checkName(name);
        checkPhoneNumber(phoneNumber);

        Promise.try(() => {
            if (vacancyId) {
                return Vacancy.findById(vacancyId)
                    .then(vacancy => Vacancy.schema.methods.toJSONLocalizedOnly(vacancy, req.lang));
            }

            return;
        })
        .then(vacancy => {
            const applicantName = name.trim();
            const mailText = `Заказан обратный звонок. \nВакансия: ${vacancy ? vacancy.title : 'не указана'} \n
                      Имя: ${applicantName || 'не указано'} \n
                      Номер телефона: ${phoneNumber}`;
            const subjectText = `Заказан обратный звонок! Имя: ${applicantName || 'не указано'}, номер телефона: ${phoneNumber}`;

            const sendMailForm = {
                subject: subjectText,
                text: mailText,
            };

            return sendMail(sendMailForm);
        })
        .then(() => res.json({
            success: true,
            message: 'Message sent successfully',
        }))
        .catch(next);
});

module.exports = router;
