import { adminAxiosInstance } from '../../services/request';

export const VIDEO_FETCHING_DATA = 'VIDEO_FETCHING_DATA';
export const VIDEO_FETCHED_DATA = 'VIDEO_FETCHED_DATA';

export const VIDEO_FETCHING_ERROR = 'VIDEO_FETCHING_ERROR';
export const VIDEO_DELETE_ERROR = 'VIDEO_DELETE_ERROR';
export const VIDEO_SAVE_ERROR = 'VIDEO_SAVE_ERROR';
// export const VIDEO_CLEAR_ERROR = 'VIDEO_CLEAR_ERROR';

export const VIDEO_CLEAR = 'VIDEO_CLEAR';
export const VIDEO_ADD = 'VIDEO_ADD';
export const VIDEO_DELETE = 'VIDEO_DELETE';

export const fetchVideoList = () => (dispatch) => {
  dispatch({
    type: VIDEO_FETCHING_DATA,
  });
  return adminAxiosInstance.get('/video').then(payload => dispatch({
    type: VIDEO_FETCHED_DATA,
    payload: payload.data,
  }))
    .catch(err => dispatch({
      type: VIDEO_FETCHING_ERROR,
      payload: err,
    }));
};

export const saveVideo = hash => dispatch =>
  adminAxiosInstance.post('/video', { hash })
    .then(response => dispatch({
      type: VIDEO_ADD,
      payload: { ...response.data },
    }))
    .catch(err => dispatch({
      type: VIDEO_SAVE_ERROR,
      payload: err,
    }));

export const deleteVideo = hash => dispatch =>
  adminAxiosInstance.delete(`/video/${hash}`)
    .then(() => dispatch({
      type: VIDEO_DELETE,
      hash,
    }))
    .catch(err => dispatch({
      type: VIDEO_DELETE_ERROR,
      payload: err,
    }));
