import {
  VIDEO_ADD,
  VIDEO_CLEAR,
  VIDEO_DELETE,
  VIDEO_FETCHED_DATA,
  VIDEO_FETCHING_DATA,
  VIDEO_FETCHING_ERROR,
  // VIDEO_CLEAR_ERROR,
  VIDEO_DELETE_ERROR,
  VIDEO_SAVE_ERROR,
} from '../actions/videoActions';

const initialState = ({
  error: '',
  data: [],
  fetching: false,
});

function galleryStore(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VIDEO_FETCHING_DATA: {
      return { ...state, fetching: true };
    }
    case VIDEO_FETCHED_DATA: {
      return { fetching: false, error: '', data: [...payload] };
    }
    case VIDEO_FETCHING_ERROR: {
      return { ...state, error: 'Some error!' };
    }
    case VIDEO_ADD: {
      return { fetching: false, error: '', data: [...state.data, payload] };
    }
    case VIDEO_DELETE: {
      const index = state.data.findIndex(o => o.youtubeHash === action.hash);
      if (index !== -1) {
        return {
          ...state,
          data: [
            ...state.data.slice(0, index),
            ...state.data.slice(index + 1),
          ],
        };
      }
      return { ...state };
    }
    case VIDEO_SAVE_ERROR: {
      return { ...state, error: 'Невозможно сохранить видео, попробуйте позже' };
    }
    case VIDEO_DELETE_ERROR: {
      return { ...state, error: 'Невозможно удалить видео, попробуйте позже' };
    }
    case VIDEO_CLEAR: {
      return { ...state };
    }
    default: return state;
  }
}

export default galleryStore;
