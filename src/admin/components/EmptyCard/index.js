import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/lib/fa';

import './index.scss';

export default class EmptyCard extends PureComponent {
  static propTypes = {
    action: PropTypes.func,
  };
  static defaultProps = {
    action: arg => arg,
  };
  render() {
    const { action } = this.props;
    return (
      <div className="gallery_empty_card" onClick={action}>
        <FaPlusCircle />
      </div>
    );
  }
}

