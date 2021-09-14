import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class Input extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    type: 'text',
    placeholder: '',
    onClick: arg => arg,
  };
  render() {
    return (
      <div className="input">
        <input {...this.props} />
      </div>
    );
  }
}
