import authenticationActions from '../actions/authenticationActions';

const checkUauthorized = store => next => (action) => {
  const { type, payload } = action;

  if (
    type.endsWith('FAIL') &&
    payload && payload.response &&
    payload.response.status === 401
  ) {
    authenticationActions.logOut()(store.dispatch);
  }

  next(action);
};

export default checkUauthorized;
