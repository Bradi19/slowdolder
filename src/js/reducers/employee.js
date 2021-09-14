import {
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAIL,
} from '../constants';

const initialState = {
  list: [],
  fetching: false,
  error: null,
};

function employee(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return { ...state, fetching: true };
    case FETCH_EMPLOYEE_SUCCESS:
      return { ...state, fetching: false, list: action.payload };
    case FETCH_EMPLOYEE_FAIL:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}

export default employee;
