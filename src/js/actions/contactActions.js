import {
  SENDING_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  API_MAP,
} from '../constants';
import { userAxiosInstance as request } from '../../services/request';

const contactActions = {
  sendMessage(data) {
    return (dispatch) => {
      dispatch({ type: SENDING_MESSAGE });

      return request.post(API_MAP.contacts, data)
        .then((response) => {
          if (response.data.success) {
            dispatch({
              type: SEND_MESSAGE_SUCCESS,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: SEND_MESSAGE_FAIL,
            payload: err,
          });
        });
    };
  },
};

export default contactActions;
