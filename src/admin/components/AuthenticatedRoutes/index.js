/* eslint-disable import/prefer-default-export,react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import { MainPage } from '../MainPage/index';
import { Vacancies } from '../../containers/VacanciesAdm/index';
import { VacanciesDetailAdm } from '../../containers/VacansiesDetailAdm/index';
import { AddNewVacance } from '../../containers/AddNewVacance/index';
import { EditVacance } from '../../containers/EditVacance/index';
import NavBar from '../../containers/NavBar/index';
import AddNewEvent from '../../containers/AddNewEvent/index';
import { EventsAdm } from '../../containers/EventsAdm/index';
import { EditEvent } from '../../containers/EditEvent/index';

import VideoContainer from '../../containers/VideoNew';


class AuthenticatedRoutes extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/vacancies" exact component={Vacancies} />
            <Route path="/vacancies/addNewVacance" exact component={AddNewVacance} />
            <Route path="/vacancies/:id" exact component={VacanciesDetailAdm} />
            <Route path="/vacancies/:id/edit" exact component={EditVacance} />
            <Route path="/video" exact component={VideoContainer} />
            <Route path="/events" exact component={EventsAdm} />
            <Route path="/events/addNewEvent" exact component={AddNewEvent} />
            <Route path="/events/:id/edit" exact component={EditEvent} />
            <Route path="*" render={() => <Redirect to="/vacancies" />} />
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
  null,
)(AuthenticatedRoutes);
