import {
  FETCHED_EVENTS_DATA,
  FETCHING_EVENTS_DATA,
  FETCHING_EVENTS_ERROR,
  CLEAR_EVENTS_DATA,
  FETCHING_SINGLE_EVENTS,
  FETCHED_SINGLE_EVENTS,
  ERROR_SINGLE_EVENTS,
} from '../actions/companyEventsActions';

const initialState = {
  fetching: false,
  fetchingSingleEvent: false,
  event: {
    body: '',
    description: '',
    title: '',
    publishedAt: '',
    thumbnail: '',
    gallery: [],
  },
  data: [],
  error: '',
  errorSingleEvent: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHING_SINGLE_EVENTS: {
      return {
        ...state, fetchingSingleEvent: true, errorSingleEvent: '',
      };
    }
    case ERROR_SINGLE_EVENTS: {
      return {
        ...state, fetchingSingleEvent: false, errorSingleEvent: action.error,
      };
    }
    case FETCHED_SINGLE_EVENTS: {
      return {
        ...state, fetchingSingleEvent: false, event: { ...payload }, errorSingleEvent: '',
      };
    }
    case FETCHING_EVENTS_DATA: {
      return {
        ...state, fetching: true, data: [], error: '',
      };
    }
    case FETCHING_EVENTS_ERROR: {
      return {
        ...state, fetching: false, data: [], error: action.error,
      };
    }
    case FETCHED_EVENTS_DATA: {
      return {
        ...state, fetching: false, data: [...payload], error: '',
      };
    }
    case CLEAR_EVENTS_DATA: {
      return initialState;
    }
    default: return state;
  }
};
