/* eslint-disable no-unused-vars,indent */
import { adminAxiosInstance } from '../../services/request';
import {
  GET_VACANCIES_REQUEST,
    GET_VACANCIES_SUCCESS,
    GET_VACANCIES_FAIL,
    ADD_VACANCY_REQUEST,
    ADD_VACANCY_SUCCESS,
    ADD_VACANCY_FAIL,
    EDIT_VACANCY_REQUEST,
    EDIT_VACANCY_SUCCESS,
    EDIT_VACANCY_FAIL,
    DELETE_VACANCY_REQUEST,
    DELETE_VACANCY__SUCCESS,
    DELETE_VACANCY__FAIL,
    COMFIRM_ADDING_MODAL,
} from '../constants/index';

const vacanciesActions = {
  comfirmAddingModal() {
    return {
        type: COMFIRM_ADDING_MODAL,
    };
  },
  getVacancies() {
    return (dispatch) => {
      dispatch({
        type: GET_VACANCIES_REQUEST,
      });
      return adminAxiosInstance.get('/vacancies')
        .then((response) => {
          dispatch({
            type: GET_VACANCIES_SUCCESS,
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: GET_VACANCIES_FAIL,
            payload: err,
          });
        });
    };
  },
  addVacance(data) {
    return (dispatch) => {
      dispatch({
        type: ADD_VACANCY_REQUEST,
      });

      return adminAxiosInstance.post('/vacancies', data)
        .then((response) => {
          dispatch({
            type: ADD_VACANCY_SUCCESS,
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: ADD_VACANCY_FAIL,
            payload: err,
          });
        });
    };
  },
  editVacance(id, data) {
    return (dispatch) => {
      dispatch({
        type: EDIT_VACANCY_REQUEST,
      });
      return adminAxiosInstance.put(`/vacancies/${id}`, data)
        .then((response) => {
          dispatch({
            type: EDIT_VACANCY_SUCCESS,
          });
        })
        .catch((err) => {
          dispatch({
            type: EDIT_VACANCY_FAIL,
            payload: err,
          });
        });
    };
  },
  deleteVacance(id) {
    return (dispatch) => {
      dispatch({
        type: DELETE_VACANCY_REQUEST,
      });
      return adminAxiosInstance.delete(`/vacancies/${id}`)
        .then((response) => {
          dispatch({
            type: DELETE_VACANCY__SUCCESS,
            payload: id,
          });
        })
        .catch((err) => {
          dispatch({
            type: DELETE_VACANCY__FAIL,
            payload: err,
          });
        });
    };
  },
};

export default vacanciesActions;
