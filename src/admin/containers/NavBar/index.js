/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './navBar';

@withRouter
export class NavBarCont extends Component {
  render() {
    return (
      <NavBar location={this.props.location} />
    );
  }
}

export default NavBarCont;
