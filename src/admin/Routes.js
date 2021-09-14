/* eslint-disable import/prefer-default-export,react/prop-types,import/no-named-as-default,max-len,no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import authenticationActions from './actions/authenticationActions';
import Login from './containers/Login/index';
import AuthenticatedRoutes from './components/AuthenticatedRoutes/index';
import './mainAdmin.scss';

class Routes extends Component {
  componentWillMount() {
    this.props.checkAuthentication();
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router>
        <div className="mainAdmin">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="*" exact component={AuthenticatedRoutes} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  store => ({
    isAuthenticated: store.authentication.isAuthenticated,
  }),
  dispatch => bindActionCreators({ ...authenticationActions }, dispatch),
)(Routes);
