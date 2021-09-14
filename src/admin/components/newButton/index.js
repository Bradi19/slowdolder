/* eslint-disable react/prop-types,react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './defaultBtnNew.scss';

export default class Button extends PureComponent {
  static propTypes = {
    styles: PropTypes.shape({}),
    type: PropTypes.string,
    className: PropTypes.string,
    toUpperCase: PropTypes.bool,
  };
  static defaultProps = {
    styles: {},
    type: 'button',
    className: '',
    toUpperCase: true,
  };
  render() {
    const {
      styles,
      type,
      className,
      children,
      toUpperCase,
    } = this.props;

    return (
      <button
        onClick={() => this.props.onClick()}
        className={`default_button_adm  ${toUpperCase && 'to_upper_case'} ${className}`}
        style={styles}
        type={type}
      >
        {children}
      </button>
    );
  }
}
