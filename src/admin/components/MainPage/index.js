/* eslint-disable react/prefer-stateless-function,import/prefer-default-export,no-unused-vars,react/jsx-boolean-value,max-len,jsx-a11y/label-has-for,no-param-reassign,no-useless-constructor,react/prop-types */
import React, { Component } from 'react';
import './main.scss';

export class MainPage extends Component {
  render() {
    return (
      <div className="showbox">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
    );
  }
}
