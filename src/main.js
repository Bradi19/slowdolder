import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import Raven from 'raven-js';
import 'bootstrap/dist/css/bootstrap.css';
// import TagManager from './js/GoogleTagManager';
import store from './js/store';
import App from './js/App';
// import config from '../config';

// if (process.env.NODE_ENV === 'production') {
//   Raven.config(config.sentryUrl, { release: config.releaseVersion }).install();
//   if (config.gtmId && config.gtmId !== '') {
//     const tagManagerArgs = {
//       gtmId: config.gtmId,
//     };
//     TagManager.initialize(tagManagerArgs);
//   }
// }

// injectTapEventPlugin();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);