import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../scss/pageHeaderSection.scss';

class HeaderSectionAdm extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };
  static defaultProps = {
    className: '',
    title: '',
    children: '',
  };
  getClassName = (className) => {
    let headerClass = 'header-section';
    if (className) {
      headerClass = `${headerClass}  ${className}`;
    }
    return headerClass;
  };
  render() {
    const {
      title,
      children,
      className,
    } = this.props;
    return (
      <div className="backPageHeaderSection">
        <div className={this.getClassName(className)}>
          <h2>{title}</h2>
          <div className="component">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSectionAdm;
