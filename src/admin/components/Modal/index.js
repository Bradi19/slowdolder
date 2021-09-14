import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class Modal extends PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.func,
    ]),
  };
  static defaultProps = {
    children: <div />,
  };
  render() {
    const isOpen = this.props.open ? 'modal__opened' : 'modal__closed';
    return (
      <div className={`modal ${isOpen}`}>
        <div className="modal__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
