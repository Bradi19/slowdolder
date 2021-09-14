import {
  FETCHING_VIDEOS_DATA,
  FETCHED_VIDEOS_DATA,
  FETCHING_VIDEOS_ERROR,
} from '../actions/companyEventsActions';

const initialState = {
  fetching: false,
  data: [],
  error: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHING_VIDEOS_DATA: {
      return {
        fetching: true, data: [], error: '',
      };
    }
    case FETCHING_VIDEOS_ERROR: {
      return {
        fetching: false, data: [], error: action.error,
      };
    }
    case FETCHED_VIDEOS_DATA: {
      return {
        fetching: false, data: [...payload], error: '',
      };
    }
    default: return state;
  }
};
