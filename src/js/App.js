/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Header from './components/Header';
import MainPageCont from './containers/MainPage';
import NotFound from './components/NotFound';
// import localeActions from './actions/localesAction';
import { Footer } from './components/Footer';
import { ROUTE_MAP } from './constants';

const App = () => {
    return (
      <Router>
        <div className={this.props.res.width <= 1279 ? 'primary-layout mobile' : '"primary-layout"'}>
          <Header />
          <main className={this.props.res.width <= 1279 ? 'mobile' : ''}>
            <Switch>
              <Route exact path={ROUTE_MAP.main} component={MainPageCont} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  };
export default App;
