/* eslint-disable react/prefer-stateless-function,import/prefer-default-export */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { store } from '../../store';
import Routes from '../../Routes';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
