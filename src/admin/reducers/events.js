/* eslint-disable no-unused-vars */
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

import img1 from '../../images/200x200.png';

const initialState = {
  fetching: false,
  data: [],
  error: false,
  successAdding: false,
  editingEvent: false,
  addingGallery: false,
  delitingPhotos: false,
};
function events(state = initialState, action) {
  switch (action.type) {
    case DELETE_EVENT_REQUEST:
    {
      return {
        ...state,
        fetching: true,
        error: false,
      };
    }
    case DELETE_EVENT_SUCCESS:
    {
      const dataCoppy = [...state.data];
      return {
        ...state,
        data: dataCoppy.filter(item => item.id !== action.payload),
        fetching: false,
        error: false,
      };
    }
    case GET_EVENT_REQUEST:
    {
      return {
        ...state,
        fetching: true,
        error: false,
      };
    }
    case GET_EVENT_SUCCESS:
    {
      return {
        ...state,
        data: action.payload,
        fetching: false,
        error: false,
      };
    }
    case GET_EVENT_FAIL:
    {
      return {
        ...state,
        fetching: false,
        error: true,
      };
    }
    case ADD_EVENT_SUCCESS:
    {
      return {
        ...state,
        fetching: false,
        successAdding: !state.successAdding,
        error: false,
      };
    }
    case ADD_EVENT_FAIL:
    {
      return {
        ...state,
        fetching: false,
        error: true,
      };
    }
    case EDIT_EVENT_SUCCESS:
    {
      return {
        ...state,
        fetching: false,
        editingEvent: !state.editingEvent,
        error: false,
      };
    }
    case EDIT_EVENT_FAIL:
    {
      return {
        ...state,
        fetching: false,
        error: true,
      };
    }
    case ADD_EVENT_GALLERY_SUCCESS:
    {
      return {
        ...state,
        fetching: false,
        addingGallery: !state.addingGallery,
        error: false,
      };
    }
    case ADD_EVENT_GALLERY_FAIL:
    {
      return {
        ...state,
        fetching: false,
        error: true,
      };
    }
    case DELETE_EVENT_PHOTOS_SUCCESS:
    {
      return {
        ...state,
        fetching: false,
        delitingPhotos: !state.delitingPhotos,
        error: false,
      };
    }
    case DELETE_EVENT_PHOTOS_FAIL:
    {
      return {
        ...state,
        fetching: false,
        error: true,
      };
    }
    default:
      return state;
  }
}

export default events;
