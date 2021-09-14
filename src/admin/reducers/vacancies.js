/* eslint-disable no-unused-vars */
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

const initialState = {
  fetching: false,
  data: [],
  error: null,
  successAdding: false,
  successEditing: false,
};
function vacancies(state = initialState, action) {
  switch (action.type) {
    case DELETE_VACANCY_REQUEST:
    {
      return {
        ...state,
        fetching: true,
        error: false,
      };
    }
    case DELETE_VACANCY__SUCCESS:
    {
      const dataCoppy = [...state.data];
      return {
        ...state,
        data: dataCoppy.filter(item => item.id !== action.payload),
        fetching: false,
        error: false,
      };
    }
    case GET_VACANCIES_REQUEST:
    {
      return {
        ...state,
        fetching: true,
        error: false,
      };
    }
    case GET_VACANCIES_SUCCESS:
    {
      return {
        ...state,
        data: action.payload,
        fetching: false,
        error: false,
      };
    }
    case GET_VACANCIES_FAIL:
    {
      return {
        ...state,
        fetching: true,
        error: true,
      };
    }
    case ADD_VACANCY_FAIL:
    {
      return {
        ...state,
        fetching: false,
        error: true,
      };
    }
    case ADD_VACANCY_SUCCESS:
    {
      return {
        ...state,
        fetching: false,
        error: false,
        successAdding: !state.successAdding,
      };
    }
    case EDIT_VACANCY_FAIL:
    {
      return {
        ...state,
        fetching: false,
        error: true,
      };
    }
    case EDIT_VACANCY_SUCCESS:
    {
      return {
        ...state,
        fetching: false,
        successEditing: !state.successEditing,
      };
    }
    default:
      return state;
  }
}

export default vacancies;
