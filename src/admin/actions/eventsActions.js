/* eslint-disable no-unused-vars,indent */
import { adminAxiosInstance } from '../../services/request';
import {
  GET_EVENT_REQUEST,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  EDIT_EVENT_REQUEST,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAIL,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  DELETE_EVENT_PHOTOS_REQUEST,
  DELETE_EVENT_PHOTOS_SUCCESS,
  DELETE_EVENT_PHOTOS_FAIL,
  ADD_EVENT_GALLERY_REQUEST,
  ADD_EVENT_GALLERY_SUCCESS,
  ADD_EVENT_GALLERY_FAIL,
  CONFIRM_ADDING_EVENT_MODAL,
} from '../constants/index';
import { prepareMultipartHeader } from '../config/prepareHeader';


const eventsActions = {
  comfirmAddingEvenModal() {
    return {
      type: CONFIRM_ADDING_EVENT_MODAL,
    };
  },
  getEvents() {
    return (dispatch) => {
      dispatch({
        type: GET_EVENT_REQUEST,
      });
      return adminAxiosInstance.get('/events')
        .then((response) => {
          // console.log(response.data);
          dispatch({
            type: GET_EVENT_SUCCESS,
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: GET_EVENT_FAIL,
            payload: err,
          });
        });
    };
  },
  addEvent(data) {
    return (dispatch) => {
      dispatch({
        type: ADD_EVENT_REQUEST,
      });
      return adminAxiosInstance.post('/events', data, prepareMultipartHeader())
        .then((response) => {
          dispatch({
            type: ADD_EVENT_SUCCESS,
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: ADD_EVENT_FAIL,
            payload: err,
          });
        });
    };
  },
  editEvent(id, data) {
    return (dispatch) => {
      dispatch({
        type: EDIT_EVENT_REQUEST,
      });
      return adminAxiosInstance.put(`/events/${id}`, data, prepareMultipartHeader())
        .then((response) => {
          dispatch({
            type: EDIT_EVENT_SUCCESS,
          });
        })
        .catch((err) => {
          dispatch({
            type: EDIT_EVENT_FAIL,
            payload: err,
          });
        });
    };
  },
  editEventGallery(id, data) {
    return (dispatch) => {
      dispatch({
        type: ADD_EVENT_GALLERY_REQUEST,
      });
      return adminAxiosInstance.put(`/events/${id}/gallery`, data, prepareMultipartHeader())
        .then((response) => {
          dispatch({
            type: ADD_EVENT_GALLERY_SUCCESS,
          });
        })
        .catch((err) => {
          dispatch({
            type: ADD_EVENT_GALLERY_FAIL,
            payload: err,
          });
        });
    };
  },
  deleteEventPhotos(id, data) {
    return (dispatch) => {
      dispatch({
        type: DELETE_EVENT_PHOTOS_REQUEST,
      });
      return adminAxiosInstance.delete(`/events/${id}/gallery`, {
        data,
      })
        .then((response) => {
          dispatch({
            type: DELETE_EVENT_PHOTOS_SUCCESS,
          });
        })
        .catch((err) => {
          dispatch({
            type: DELETE_EVENT_PHOTOS_FAIL,
            payload: err,
          });
        });
    };
  },
  deleteEvent(id) {
    return (dispatch) => {
      dispatch({
        type: DELETE_EVENT_REQUEST,
      });
      return adminAxiosInstance.delete(`/events/${id}`)
        .then((response) => {
          dispatch({
            type: DELETE_EVENT_SUCCESS,
            payload: id,
          });
        })
        .catch((err) => {
          dispatch({
            type: DELETE_EVENT_FAIL,
            payload: err,
          });
        });
    };
  },
};

export default eventsActions;
