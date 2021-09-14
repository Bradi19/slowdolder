import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PlaneBtn extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    onClick: PropTypes.func,
    altText: PropTypes.string,
    src: PropTypes.string,
    disabled: PropTypes.bool,
  };
  static defaultProps = {
    className: '',
    disabledClassName: '',
    altText: '',
    src: '',
    onClick: arg => arg,
    disabled: false,
  };
  render() {
    const {
      onClick,
      className,
      disabledClassName,
      src,
      altText,
      disabled,
    } = this.props;
    return (
      <div
        onClick={(disabled ? () => ({}) : onClick)}
        className={(disabled ? disabledClassName : className)}
      >
        <img src={src} alt={altText} />
      </div>
    );
  }
}
