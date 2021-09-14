/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { syncTranslationWithStore } from 'react-redux-i18n';
import thunk from 'redux-thunk';
// import reduxPromise from 'redux-promise-middleware';
import combineReducers from '../reducers';
// import { checkVacancies } from './middlewares/checkVacancies';

import { RESIZE_WINDOW } from '../constants';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'MyApp',
        actionsBlacklist: ['REDUX_STORAGE_SAVE'],
      }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
// reduxPromise,
// checkVacancies,


const store = createStore(combineReducers, enhancer);

syncTranslationWithStore(store);

store.dispatch({ type: RESIZE_WINDOW });

window.addEventListener(
  'resize',
  () => store.dispatch({ type: RESIZE_WINDOW }),
);

export default store;
