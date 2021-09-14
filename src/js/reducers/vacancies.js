/* eslint-disable no-plusplus */
import { createSelector } from 'reselect';
import {
  GET_CLIENT_REQUEST,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAIL,
  CHANGE_SPECIALTY_VACANCIES_FILTER,
  CHANGE_LEVEL_VACANCIES_FILTER,
  GET_SEND_APPLICATION_REQUEST,
  GET_SEND_FEEDBACK_APPLICATION_REQUEST,
  GET_SEND_APPLICATION_SUCCESS,
  GET_SEND_APPLICATION_FAIL,
  GET_SEND_APPLICATION_CALL_BACK_SUCCESS,
  GET_SEND_APPLICATION_CALL_BACK_FAIL,
} from '../constants';

// noinspection JSAnnotator
const initialState = {
  fetching: false,
  data: [],
  error: false,
  fetchingSendingAplication: false,
  fetchingSendingFeedBackAplication: false,
  sendigApplicationSuccess: false,
  vacanciesSpecialtyFilter: '',
  vacanciesLevelFilter: '',
};

function vacancies(state = initialState, action) {
  switch (action.type) {
    case GET_SEND_APPLICATION_REQUEST:
      {
        return {
          ...state,
          fetchingSendingAplication: true,

          error: false,
        };
      }
    case GET_SEND_FEEDBACK_APPLICATION_REQUEST:
      {
        return {
          ...state,
          fetchingSendingFeedBackAplication: true,

          error: false,
        };
      }
    case GET_SEND_APPLICATION_SUCCESS:
    case GET_SEND_APPLICATION_CALL_BACK_SUCCESS:
      {
        return {
          ...state,
          sendigApplicationSuccess: !state.sendigApplicationSuccess,
          fetchingSendingFeedBackAplication: false,
          error: false,
        };
      }
    case GET_SEND_APPLICATION_FAIL:
    case GET_SEND_APPLICATION_CALL_BACK_FAIL:
      {
        return {
          ...state,
          sendigApplicationSuccess: !state.sendigApplicationSuccess,
          fetchingSendingAplication: false,
          fetchingSendingFeedBackAplication: false,
          error: true,
        };
      }
    case GET_CLIENT_REQUEST:
      {
        return {
          ...state,
          fetching: true,
          error: false,
        };
      }
    case GET_CLIENT_SUCCESS:
      {
        const data = action.payload;
        return {
          ...state,
          data,
          fetching: false,
          error: false,
        };
      }
    case GET_CLIENT_FAIL:
      {
        return {
          ...state,
          fetching: false,
          error: true,
        };
      }
    case CHANGE_SPECIALTY_VACANCIES_FILTER:
      {
        if (state.vacanciesSpecialtyFilter === action.payload || action.payload === 'All') { return { ...state, vacanciesSpecialtyFilter: '' }; }
        return { ...state, vacanciesSpecialtyFilter: action.payload };
      }
    case CHANGE_LEVEL_VACANCIES_FILTER:
      {
        if (state.vacanciesLevelFilter === action.payload) { return { ...state, vacanciesLevelFilter: '' }; }
        return { ...state, vacanciesLevelFilter: action.payload };
      }
    default:
      return state;
  }
}

// Selectors

const vacanciesList = store => store.vacancies.data;

export const vacancySelector = createSelector(
  vacanciesList,
  (store, props) => (props.match && props.match.params && props.match.params.title ?
    props.match.params.title : null),
  (data, title) => data.find(item => item.title.trim().replace(/–|[.]|,|[/]|\s+/g, "-").replace(/-+/g, "-")
    .toLowerCase() === title.toLowerCase()),
);

export const vacanciesSelector = createSelector(
  vacanciesList,
  store => ({
    vacanciesLevelFilter: store.vacancies.vacanciesLevelFilter.toUpperCase(),
    vacanciesSpecialtyFilter: store.vacancies.vacanciesSpecialtyFilter.toUpperCase(),
  }),
  (data, { vacanciesLevelFilter, vacanciesSpecialtyFilter }) =>
    data.filter(item => (
      (vacanciesLevelFilter === '' || item.level.toUpperCase() === vacanciesLevelFilter) &&
      (vacanciesSpecialtyFilter === '' || item.specialty.toUpperCase() === vacanciesSpecialtyFilter)
    )),
);

export const filterItemsSelector = createSelector(
  vacanciesList,
  (data) => {
    const filterItems = {
      specialty: [],
      level: [],
    };

    for (let i = 0; i < data.length; i++) {
      const { specialty, level } = data[i];

      if (!filterItems.specialty.includes(specialty)) {
        filterItems.specialty.push(specialty);
      }

      if (!filterItems.level.includes(level)) {
        filterItems.level.push(level);
      }
    }

    if (filterItems.specialty.length > 1) filterItems.specialty.unshift('All');

    return filterItems;
  },
);

export default vacancies;
