import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class Button extends PureComponent {
  static propTypes = {
    action: PropTypes.func,
    type: PropTypes.oneOf([
      'border',
      'horizontal',
      'vertical',
    ]),
    color: PropTypes.oneOf([
      'green',
      'blue',
      'purple',
      'navy',
      'orange',
      'red',
    ]),
    text: PropTypes.string,
  };
  static defaultProps = {
    action: arg => arg,
    color: 'red',
    type: 'border',
    text: 'Text',
  };
  generateClassName = (type, color) => {
    switch (type) {
      case 'border': {
        return `btn btn-${color} btn-border-o`;
      }
      case 'horizontal': {
        return `btn btn-${color} btn-fill-horz-o`;
      }
      case 'vertical': {
        return `btn btn-${color} btn-fill-vert`;
      }
      default: {
        return `btn btn-${color} btn-border-o`;
      }
    }
  };
  render() {
    const {
      action,
      type,
      color,
      text,
    } = this.props;

    return (
      <button
        onClick={action}
        className={this.generateClassName(type, color)}
      >
        { text }
      </button>
    );
  }
}
