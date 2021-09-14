import {
  CHANGE_SPECIALTY_VACANCIES_FILTER,
  CHANGE_LEVEL_VACANCIES_FILTER,
  GET_CLIENT_REQUEST,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAIL,
  GET_SEND_APPLICATION_REQUEST,
  GET_SEND_FEEDBACK_APPLICATION_REQUEST,
  GET_SEND_APPLICATION_SUCCESS,
  GET_SEND_APPLICATION_FAIL,
  GET_SEND_APPLICATION_CALL_BACK_SUCCESS,
  GET_SEND_APPLICATION_CALL_BACK_FAIL,
  API_MAP,
} from '../constants';
import { userAxiosInstance as request } from '../../services/request';

const vacanciesActions = {
  sendApplication(data) {
    return (dispatch) => {
      dispatch({
        type: GET_SEND_APPLICATION_REQUEST,
      });
      return request.post(API_MAP.vacancies, data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(() => {
          dispatch({
            type: GET_SEND_APPLICATION_SUCCESS,
            // payload: response.data,
          });
        })
        .catch(() => {
          dispatch({
            type: GET_SEND_APPLICATION_FAIL,
          });
        });
    };
  },
  sendApplicationForCallBack(data) {
    return (dispatch) => {
      dispatch({
        type: GET_SEND_FEEDBACK_APPLICATION_REQUEST,
      });

      return request.post(API_MAP.vacanciesCallBack, data)
        .then(() => {
          dispatch({
            type: GET_SEND_APPLICATION_CALL_BACK_SUCCESS,
          });
        })
        .catch(() => {
          dispatch({
            type: GET_SEND_APPLICATION_CALL_BACK_FAIL,
          });
        });
    };
  },
  getVacancies() {
    return (dispatch, getStore) => {
      const lang = getStore().i18n.locale;
      // console.log('Action lang', lang);
      dispatch({
        type: GET_CLIENT_REQUEST,
      });

      return request.get(API_MAP.vacancies, { params: { lang } })
        .then((response) => {
          dispatch({
            type: GET_CLIENT_SUCCESS,
            payload: response.data,
          });
        /*
          setTimeout(() => {
            dispatch({
              type: GET_CLIENT_SUCCESS,
              payload: response.data,
            });
          }, 10000);
          */
        })
        .catch(() => {
          dispatch({
            type: GET_CLIENT_FAIL,
          });
        });
    };
  },
  changeSpecialtyFilter(filterItem) {
    return {
      type: CHANGE_SPECIALTY_VACANCIES_FILTER,
      payload: filterItem,
    };
  },
  changeLevelFilter(filterItem) {
    return {
      type: CHANGE_LEVEL_VACANCIES_FILTER,
      payload: filterItem,
    };
  },
};

export default vacanciesActions;
