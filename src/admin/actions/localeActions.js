import { CHANGE_LANG } from '../constants';

const localeActions = {
  changeLang(lang) {
    return {
      type: CHANGE_LANG,
      payload: lang,
    };
  },
};

export default localeActions;
