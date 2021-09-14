/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './components/Header';
import MainPageCont from './containers/MainPage';
import Vacancies from './containers/Vacancies';
import VacanciesDetail from './containers/VacanciesDetail';
import SingleCompanyEvent from './containers/SignleCompanyEvent';
import Company from './containers/Company';
import Career from './containers/Career';
import AboutUs from './components/AboutUs';
import Graduated from './components/Graduated';
import Contacts from './containers/Contacts';
import Gallery from './components/Gallery';
import LaborConditions from './components/LaborConditions';
import Employees from './containers/Employees';
import NotFound from './components/NotFound';
import localeActions from './actions/localesAction';
import { Footer } from './components/Footer';
import { ROUTE_MAP } from './constants';
import Courses from './containers/Courses';
import Qaengine from './containers/Qaengine';
import Selenium from './containers/Selenium';
import BaseCourse from './containers/BaseCourse';

class App extends Component {
  static propTypes = {
    setInitialLocales: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.setInitialLocales();
  }

  render() {
    return (
      <Router>
        <div className={this.props.res.width <= 1279 ? 'primary-layout mobile' : '"primary-layout"'}>
          <Header />
          <main className={this.props.res.width <= 1279 ? 'mobile' : ''}>
            <Switch>
              <Route exact path={ROUTE_MAP.main} component={MainPageCont} />
              <Route exact path={ROUTE_MAP.vacancies} component={Vacancies} />
              <Route exact path={ROUTE_MAP.vacancyDetail} component={VacanciesDetail} />
              <Route exact path={ROUTE_MAP.career} component={Career} />
              <Route exact path={ROUTE_MAP.contacts} component={Contacts} />
              <Route exact path={ROUTE_MAP.about} component={AboutUs} />
              <Route exact path={ROUTE_MAP.labor} component={LaborConditions} />
              <Route exact path={ROUTE_MAP.courses} component={Courses} />
              <Route exact path={ROUTE_MAP.qaengine} component={Qaengine} />
              <Route exact path={ROUTE_MAP.baseCourse} component={BaseCourse} />
              <Route exact path={ROUTE_MAP.selenium} component={Selenium} />
              <Route exact path={ROUTE_MAP.employees} component={Employees} />
              <Route exact path={ROUTE_MAP.gallery} component={Gallery} />
              <Route exact path={ROUTE_MAP.companyEvents} component={Company} />
              <Route exact path={ROUTE_MAP.singleCompanyEvent} component={SingleCompanyEvent} />
              <Route exact path={ROUTE_MAP.graduated} component={Graduated} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(
  store => ({ res: store.response }),
  dispatch => bindActionCreators({ ...localeActions }, dispatch),
)(App);
