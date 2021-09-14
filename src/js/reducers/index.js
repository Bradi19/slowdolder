import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import locale from './locales';
import vacancies from './vacancies';
import contacts from './contacts';
import eventStore from './companyEventsReducer';
import employee from './employee';
import response from './responsiveReducer';
import video from './videoReducer';
import photo from './photoReducer';


export default combineReducers({
  locale,
  vacancies,
  employee,
  eventStore,
  contacts,
  response,
  video,
  photo,
  i18n: i18nReducer,
});
