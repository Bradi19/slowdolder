/* eslint-disable jsx-a11y/alt-text,react/no-unused-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaClose } from 'react-icons/lib/fa';

// import Button from '../Button';

import './index.scss';

export default class Card extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    onIconClick: PropTypes.func,
    capture: PropTypes.string,
    action: PropTypes.func.isRequired,
  };
  static defaultProps = {
    capture: 'Some title, mb not :)',
    onIconClick: arg => arg,
  };

  onClick = () => this.props.action(this.props.hash);
  render() {
    const {
      image,
      capture,
      onIconClick,
      hash,
    } = this.props;
    return (
      <div
        className="gallery_card"
        onClick={this.onClick}
        style={{ background: `url(${image})` }}
      >
        <div className="gallery_card__hovered">{capture}</div>
        <div className="gallery_card__actions" onClick={onIconClick(hash)}>
          <FaClose size={25} />
        </div>
      </div>
    );
  }
}
