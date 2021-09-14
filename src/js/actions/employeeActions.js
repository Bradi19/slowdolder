import {
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAIL,
} from '../constants';
import { userAxiosInstance as request } from '../../services/request';

const employeeActions = {
  getEmployee() {
    return (dispatch, getStore) => {
      const lang = getStore().i18n.locale;
      dispatch({ type: FETCH_EMPLOYEE });
      return request.get('/employee', { params: { lang } })
        .then(response => (
          dispatch({
            type: FETCH_EMPLOYEE_SUCCESS,
            payload: response.data,
          })
        ))
        .catch((err) => {
          dispatch({
            type: FETCH_EMPLOYEE_FAIL,
            payload: err,
          });
        });
    };
  },
};

export default employeeActions;
