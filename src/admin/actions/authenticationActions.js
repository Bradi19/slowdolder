import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOG_OUT,
  LOGIN_FAIL_VALIDATION,
} from '../constants';
import { adminAxiosInstance } from '../../services/request';

const authenticationActions = {
  login({ username, password }) {
    return (dispatch) => {
      dispatch({
        type: LOGIN_REQUEST,
      });
      return adminAxiosInstance.post('/login', { username, password })
        .then((response) => {
          const { token } = response.data;
          localStorage.setItem('token', response.data.token);
          adminAxiosInstance.defaults.headers.authorization = token;
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data.token,
          });
        })
        .catch(() => {
          dispatch({
            type: LOGIN_FAIL_VALIDATION,
          });
        });
    };
  },

  logOut() {
    return (dispatch) => {
      localStorage.removeItem('token');

      dispatch({ type: LOG_OUT });
    };
  },

  checkAuthentication() {
    const token = localStorage.getItem('token');

    if (token && token.length > 0) {
      adminAxiosInstance.defaults.headers.authorization = token;
      return {
        type: LOGIN_SUCCESS,
      };
    }
    return {
      type: LOGIN_FAIL,
    };
  },
};

export default authenticationActions;
