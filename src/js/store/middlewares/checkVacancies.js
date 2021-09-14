/* eslint-disable import/prefer-default-export */
import { GET_CLIENT_REQUEST, GET_CLIENT_SUCCESS } from '../../constants/index';
import { FETCHING_EVENTS_DATA, FETCHED_EVENTS_DATA } from '../../actions/companyEventsActions';

export const checkVacancies = store => next => (action) => {
  if ((action.type === GET_CLIENT_REQUEST || action.type === GET_CLIENT_SUCCESS) &&
      store.getState().vacancies.data.length !== 0) {
    return;
  }

  if ((action.type === FETCHING_EVENTS_DATA || action.type === FETCHED_EVENTS_DATA) &&
    store.getState().eventStore.data.length !== 0) {
    return;
  }
  next(action);
};
