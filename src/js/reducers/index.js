import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import locale from './locales';
import response from './responsiveReducer';


export default combineReducers({
  locale,
  response,
  i18n: i18nReducer,
});