import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../../scss/app_container.scss';

export default class Container extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
    ]),
    style: PropTypes.shape({}),
  };
  static defaultProps = {
    children: <div />,
    style: {},
  };
  render() {
    const { style, children } = this.props;
    return (
      <div className="app_container" style={{ ...style }}>
        { children }
      </div>
    );
  }
}
