import { setLocale, loadTranslations } from 'react-redux-i18n';
import { CHANGE_LANG, initialLang } from '../constants';
import translationsObject from '../../locations/translations';

const localeActions = {
  // set translations
  setInitialLocales() {
    return (dispatch) => {
      let checkLang = initialLang;
      if (localStorage.getItem('lang')) {
        checkLang = localStorage.getItem('lang');
      }
      dispatch(loadTranslations(translationsObject));
      dispatch(setLocale(checkLang));
      dispatch({
        type: CHANGE_LANG,
        payload: checkLang,
      });
    };
  },
  changeLang(lang) {
    return (dispatch) => {
      localStorage.setItem('lang', lang);
      dispatch(setLocale(lang));
      dispatch({
        type: CHANGE_LANG,
        payload: lang,
      });
    };
  },
};

export default localeActions;
