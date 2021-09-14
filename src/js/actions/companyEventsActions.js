import { userAxiosInstance as request } from '../../services/request';
import { API_MAP } from '../constants';

export const FETCHING_EVENTS_DATA = 'FETCHING_EVENTS_DATA';
export const FETCHED_EVENTS_DATA = 'FETCHED_EVENTS_DATA';
export const FETCHING_EVENTS_ERROR = 'FETCHING_EVENTS_ERROR';
export const CLEAR_EVENTS_DATA = 'CLEAR_EVENTS_DATA';
export const FETCHING_VIDEOS_DATA = 'FETCHING_VIDEOS_DATA';
export const FETCHED_VIDEOS_DATA = 'FETCHED_VIDEOS_DATA';
export const FETCHING_VIDEOS_ERROR = 'FETCHING_VIDEOS_ERROR';
export const FETCHING_PHOTOS_DATA = 'FETCHING_PHOTOS_DATA';
export const FETCHED_PHOTOS_DATA = 'FETCHED_PHOTOS_DATA';
export const FETCHING_PHOTOS_ERROR = 'FETCHING_PHOTOS_ERROR';
export const FETCHING_SINGLE_EVENTS = 'FETCHING_SINGLE_EVENTS';
export const FETCHED_SINGLE_EVENTS = 'FETCHED_SINGLE_EVENTS';
export const ERROR_SINGLE_EVENTS = 'ERROR_SINGLE_EVENTS';

const companyEventActions = {
  getEvent(id) {
    return (dispatch) => {
      dispatch({
        type: FETCHING_SINGLE_EVENTS,
      });

      return request.get(`${API_MAP.events}/${id}`)
        .then((response) => {
          dispatch({
            type: FETCHED_SINGLE_EVENTS,
            payload: response.data,
          });
        })
        .catch(() => {
          dispatch({
            type: ERROR_SINGLE_EVENTS,
          });
        });
    };
  },
  getBlog() {
    return (dispatch, getStore) => {
      const lang = getStore().i18n.locale;
      dispatch({
        type: FETCHING_EVENTS_DATA,
      });

      return request.get(API_MAP.blog, { params: { lang } })
        .then((response) => {
          dispatch({
            type: FETCHED_EVENTS_DATA,
            payload: response.data,
          });
        })
        .catch(() => {
          dispatch({
            type: FETCHING_EVENTS_ERROR,
          });
        });
    };
  },
  getVideos() {
    return (dispatch) => {
      dispatch({
        type: FETCHING_VIDEOS_DATA,
      });

      return request.get(API_MAP.video)
        .then((response) => {
          dispatch({
            type: FETCHED_VIDEOS_DATA,
            payload: response.data,
          });
        })
        .catch(() => {
          dispatch({
            type: FETCHING_VIDEOS_ERROR,
          });
        });
    };
  },
  getPhotos() {
    return (dispatch, getStore) => {
      const lang = getStore().i18n.locale;
      dispatch({
        type: FETCHING_PHOTOS_DATA,
      });

      return request.get(API_MAP.gallery, { params: { lang } })
        .then((response) => {
          dispatch({
            type: FETCHED_PHOTOS_DATA,
            payload: response.data,
          });
        })
        .catch(() => {
          dispatch({
            type: FETCHING_PHOTOS_ERROR,
          });
        });
    };
  },
};

export default companyEventActions;
