import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../../scss/loader.scss';

export default class Loader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    svgStyle: PropTypes.objectOf(PropTypes.string),
  };

  static defaultProps = {
    className: 'path',
    svgStyle: { height: '100%' },
  };
  render() {
    return (
      <div className="showbox">
        <div className="loader">
          <svg style={this.props.svgStyle} className="circular" viewBox="25 25 50 50">
            <circle className={this.props.className} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
    );
  }
}
