export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// change locale
export const CHANGE_LANG = 'CHANGE_LANG';
export const initialLang = 'ru';
export const CHANGE_SPECIALTY_VACANCIES_FILTER = 'CHANGE_SPECIALTY_VACANCIES_FILTER';
export const CHANGE_LEVEL_VACANCIES_FILTER = 'CHANGE_LEVEL_VACANCIES_FILTER';

export const GET_CLIENT_REQUEST = 'GET_CLIENT_REQUEST';
export const GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS';
export const GET_CLIENT_FAIL = 'GET_CLIENT_FAIL';
export const GET_SEND_APPLICATION_REQUEST = 'GET_SEND_APPLICATION_REQUEST';
export const GET_SEND_FEEDBACK_APPLICATION_REQUEST = 'GET_SEND_FEEDBACK_APPLICATION_REQUEST';
export const GET_SEND_APPLICATION_SUCCESS = 'GET_SEND_APPLICATION_SUCCESS';
export const GET_SEND_APPLICATION_CALL_BACK_SUCCESS = 'GET_SEND_APPLICATION_CALL_BACK_SUCCESS';
export const GET_SEND_APPLICATION_FAIL = 'GET_SEND_APPLICATION_FAIL';
export const GET_SEND_APPLICATION_CALL_BACK_FAIL = 'GET_SEND_APPLICATION_CALL_BACK_FAIL';

// contacts
export const SENDING_MESSAGE = 'SENDING_MESSAGE';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAIL = 'SEND_MESSAGE_FAIL';

// Google api constants
export const GOOGLE_API_KEY = 'AIzaSyDZiIAN2C-fypCY691o0d_KVIajKnWWYPg';
export const COMPANY_LOCATION = {
  lat: 46.311827,
  lng: 30.654697,
};

export const COMPANY_LOCATION_FORM = {
  lat: 46.311634,
  lng: 30.654917,
};

export const MAP_CENTER = {
  lat: 46.310745,
  lng: 30.655193,
};

export const MAP_FORM = {
  lat: 46.3114092,
  lng: 30.6503832,
};

export const MAP_MOBILE = {
  lat: 46.3113506,
  lng: 30.6550078,
};

// employee
export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE';
export const FETCH_EMPLOYEE_SUCCESS = 'RES_FETCH_EMPLOYEE_SUCCESS';
export const FETCH_EMPLOYEE_FAIL = 'RES_FETCH_EMPLOYEE_FAIL';

export const ROUTE_MAP = {
  main: '/',
  vacancies: '/vacancies',
  vacancyDetail: `/vacancies/:title`,
  training: '/training',
  career: '/career',
  contacts: '/contacts',
  about: '/about',
  labor: '/labor',
  employees: '/employees',
  gallery: '/gallery',
  companyEvents: '/company/events',
  singleCompanyEvent: '/company/events/:event',
  notFound: '/404',
  courses: '/courses',
  baseCourse: '/base_course',
  qaengine: '/qaengine',
  selenium: '/selenium_ide_course',
  graduated: '/courses/graduated',
};

const OSS = 'OSSystem';

export const HELMET_ROUTE_MAP = {
  ru: {
      main: `Главная | ${OSS}`,
      vacancies: `Вакансии | ${OSS}`,
      vacancyDetail: `Вакансия | ${OSS}`,
      training: `Обучение | ${OSS}`,
      career: `Карьера | ${OSS}`,
      contacts: `Контакты | ${OSS}`,
      about: `О нас | ${OSS}`,
      labor: `Мы Предлагаем | ${OSS}`,
      employees: `Ключевые сотрудники | ${OSS}`,
      gallery: `Галерея | ${OSS}`,
      companyEvents: `Блог | ${OSS}`,
      singleCompanyEvent: `Мероприятие | ${OSS}`,
      notFound: ` 404 | ${OSS}`,
      courses: ` Обучение | ${OSS}`,
      baseCourse: ` Базовый курс программирования | ${OSS}`,
      qaengine: ` Курсы QA | ${OSS}`,
      selenium: ` Курсы автоматизации тестирования | ${OSS}`,
      graduated: `Сертификаты | ${OSS}`,
  },
  ua: {
      main: `Головна | ${OSS}`,
      vacancies: ` Вакансії | ${OSS}`,
      vacancyDetail: `Вакансія | ${OSS}`,
      training: `Навчання | ${OSS}`,
      career: `Кар'єра | ${OSS}`,
      contacts: `Контакти | ${OSS}`,
      about: `Про нас | ${OSS}`,
      labor: `Ми пропонуємо | ${OSS}`,
      employees: `Ключові співробітники | ${OSS}`,
      gallery: `Галерея | ${OSS}`,
      companyEvents: `Блог | ${OSS}`,
      singleCompanyEvent: `Захід | ${OSS}`,
      notFound: ` 404 | ${OSS}`,
      courses: ` Навчання | ${OSS}`,
      baseCourse: ` Базовий курс програмування | ${OSS}`,
      qaengine: ` Курси QA | ${OSS}`,
      selenium: ` Курси автоматизації тестування | ${OSS}`,
      graduated: `Cертифікати | ${OSS}`,
  }
};

export const API_MAP = {
  gallery: '/gallery',
  blog: '/blog',
  vacancies: '/vacancies',
  vacanciesCallBack: '/vacancies/callBack',
  contacts: '/contacts',
  video: '/video',
  events: '/events',
};

export const RESIZE_WINDOW = 'RESIZE_WINDOW';
export const MOBILE = 'MOBILE';
export const TABLET = 'TABLET';
export const DESKTOP = 'DESKTOP';
