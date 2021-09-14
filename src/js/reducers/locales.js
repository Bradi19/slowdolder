const initialState = {
  activeLang: 'ru',
};
function locales(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LANG':
      return { ...state, activeLang: action.payload };
    default:
      return state;
  }
}

export default locales;