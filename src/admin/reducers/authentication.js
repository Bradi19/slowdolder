import {
  LOGIN_SUCCESS,
  LOGIN_FAIL_VALIDATION,
  LOG_OUT,
} from '../constants/index';

const initialState = {
  isAuthenticated: false,
  wrongUserData: false,
};

function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, wrongUserData: false };
    case LOGIN_FAIL_VALIDATION:
      return { ...state, wrongUserData: !state.wrongUserData };
    case LOG_OUT:
      return { ...state, isAuthenticated: false, wrongUserData: false };
    default:
      return state;
  }
}

export default authentication;
