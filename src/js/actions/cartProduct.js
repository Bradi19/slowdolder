import {
  GET_CART_REQUEST,
  GET_CART_REQUEST_SUCCESS,
  GET_CART_REQUEST_FAIL,
  API_MAP,
} from '../constants';
import { userAxiosInstance as request } from '../../services/request';

const CartProduct = {
  addToCart(data) {
    return (dispatch) => {
      dispatch({
        type: GET_CART_REQUEST,
      });
      return request.post(API_MAP.addToCart, data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(() => {
          dispatch({
            type: GET_CART_REQUEST_SUCCESS,
          });
        })
        .catch(() => {
          dispatch({
            type: GET_CART_REQUEST_FAIL,
          });
        });
    };
  },
  getCart() {
    return (dispatch, getStore) => {
      const lang = getStore().i18n.locale;
      // console.log('Action lang', lang);
      dispatch({
        type: GET_CART_REQUEST,
      });

      return request.get(API_MAP.cart, { params: { lang } })
        .then((response) => {
          dispatch({
            type: GET_CART_REQUEST_SUCCESS,
            payload: response.data,
          });
          /*
            setTimeout(() => {
              dispatch({
                type: GET_CLIENT_SUCCESS,
                payload: response.data,
              });
            }, 10000);
            */
        })
        .catch(() => {
          dispatch({
            type: GET_CART_REQUEST_FAIL,
          });
        });
    };
  }

};
export default CartProduct;