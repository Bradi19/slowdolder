import {
  SENDING_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
} from '../constants';

const initialState = {
  sendingMessage: false,
  sendMessageSuccess: false,
  error: null,
};

function contacts(state = initialState, action) {
  switch (action.type) {
    case SENDING_MESSAGE:
      return { ...state, sendingMessage: true };
    case SEND_MESSAGE_SUCCESS:
      return { ...state, sendingMessage: false, sendMessageSuccess: true };
    case SEND_MESSAGE_FAIL:
      return {
        ...state, sendingMessage: false, sendMessageSuccess: false, error: action.payload,
      };
    default:
      return state;
  }
}

export default contacts;
