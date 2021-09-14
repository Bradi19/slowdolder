/* eslint-disable react/require-default-props,react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

import '../../../scss/defaultBtn.scss';

export default class Button extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.shape({}),
    type: PropTypes.string,
    className: PropTypes.string,
    toUpperCase: PropTypes.bool,
    onTouchStart: PropTypes.func,
    onTouchEnd: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    disabled: false,
    style: {},
    type: 'button',
    className: '',
    toUpperCase: true,
    onTouchStart: arg => arg,
    onTouchEnd: arg => arg,
  };
  render() {
    const {
      text,
      style,
      type,
      className,
      children,
      toUpperCase,
      onTouchStart,
      onTouchEnd,
      disabled = false,
    } = this.props;
    return (
      <button
        onClick={this.props.onClick}
        className={`default_button ${toUpperCase && 'to_upper_case'} ${className}`}
        style={style}
        type={type}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        disabled={disabled}
      >
        {children}
        { text && <Translate value={text} /> }
      </button>
    );
  }
}
