/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers';
import checkUauthorized from './checkUnauthorized';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'MyApp',
        actionsBlacklist: ['REDUX_STORAGE_SAVE'],
      }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, checkUauthorized));

export const store = createStore(combineReducers, enhancer);

export default store;
