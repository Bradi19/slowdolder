/* eslint-disable no-unused-vars,react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  TABLET,
  MOBILE,
  DESKTOP,
} from '../../constants';

class UIToggler extends PureComponent {
  static propTypes = {
    view: PropTypes.string.isRequired,
    // checkScreenView: PropTypes.func.isRequired,
    tabletComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.arrayOf(PropTypes.node),
    ]),
    mobileComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.arrayOf(PropTypes.node),
    ]),
    desktopComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.arrayOf(PropTypes.node),
    ]),
  };

  renderComponent = () => {
    const {
      desktopComponent,
      tabletComponent,
      mobileComponent,
      view,
    } = this.props;

    switch (view) {
      case DESKTOP: return desktopComponent;
      case TABLET: return tabletComponent;
      case MOBILE: return mobileComponent;
      default: return desktopComponent;
    }
  };
  render() {
    return this.renderComponent();
  }
}

export default connect(
  store => store.response,
  dispatch => bindActionCreators({ checkScreenView: () => ({}) }, dispatch),
)(UIToggler);

//
// (
//   <div>
//     {}
//
//     { desktop || <div /> }
//     { tablet || <div /> }
//     { mobile || <div /> }
//   </div>
// );
