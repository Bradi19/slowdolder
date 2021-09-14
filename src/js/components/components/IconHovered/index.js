import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../../scss/iconHovered.scss';


export default class IconHovered extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    iconHover: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    className: PropTypes.string,
  };
  static defaultProps = {
    className: 'linkIconCont',
  };
  constructor({ ...props }) {
    super(...props);
    this.state = { hovered: false };
  }
  onMouseEnter = () => this.setState({ hovered: true });
  onMouseLeave = () => this.setState({ hovered: false });
  render() {
    const {
      icon,
      iconHover,
      link,
      className,
    } = this.props;
    const imageSrc = this.state.hovered ? iconHover : icon;
    return (
      <div
        className={className}
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt="" />
        </a>
      </div>
    );
  }
}
