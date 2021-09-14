import { combineReducers } from 'redux';
import vacancies from './vacancies';
import locales from './locales';
import authentication from './authentication';
import video from './video';
import events from './events';

export default combineReducers({
  vacancies,
  locales,
  authentication,
  video,
  events,
});
