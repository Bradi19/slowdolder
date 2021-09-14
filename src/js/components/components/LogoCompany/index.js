/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ROUTE_MAP } from '../../constants/index';

@withRouter
export default class LogoComp extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    currentLogo: PropTypes.string.isRequired
  };
  onClick = () => this.props.history.push(ROUTE_MAP.main);
  render() {
    return (
      <div className="logoCont" onClick={this.onClick}>
        <img src={this.props.currentLogo} alt="logo" />
      </div>
    );
  }
}
