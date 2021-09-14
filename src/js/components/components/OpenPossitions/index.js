/* eslint-disable react/no-array-index-key,react/require-default-props,react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import vacanciesActions from '../../actions/filterVacanciesActions';
import { VacanceCard } from '../VacanceCard/index';
import Button from '../Button';
import { ROUTE_MAP } from '../../constants/index';
import { CardCarousel } from '../ResponsibleCarousel/index';
import UIToggler from '../../containers/UIToggler';


class OpenPossitions extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    i18n: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
    getVacancies: PropTypes.func.isRequired,
    data: PropTypes.array,
  };
  componentWillMount() {
    this.props.getVacancies();
  }
  componentWillReceiveProps(next) {
    if (next.i18n !== this.props.i18n) {
      this.props.getVacancies();
    }
  }
  prepareItems = vacancies => vacancies.slice(0, 4).map(item => (
    <div
      className="vacanceCelNoBorder"
      key={item.id}
    >
      <VacanceCard
        itemProps={item}
      />
    </div>
  ));

  prepareItemsForMobile = vacancies => vacancies.slice(0, 4).map((item, index) => (
    <VacanceCard key={index} itemProps={item} footerStyle={{ opacity: '1' }} hoverEffect={false} />
  ));

  redirect = () => {
    document.body.parentNode.scrollTop = 0;
    this.props.history.push(ROUTE_MAP.vacancies);
  };

  prepareVacanList = vacanciesList => (
    <div className="vacanceListMainPage">{vacanciesList}</div>
  );

  render() {
    const vacanciesList = this.prepareItems(this.props.data);
    const vacanciesMobileList = this.prepareItemsForMobile(this.props.data);
    return (
      <div>
        <UIToggler
          desktopComponent={this.prepareVacanList(vacanciesList)}
          tabletComponent={this.prepareVacanList(vacanciesList)}
          mobileComponent={<CardCarousel itemArr={vacanciesMobileList} />}
        />
        <div className="allVacanceBtn">
          <Button text="mainPage.vacanciesBtn" onClick={this.redirect} />
        </div>
      </div>

    );
  }
}

export default compose(
  connect(
    store => ({
      fetching: store.vacancies.fetching,
      data: store.vacancies.data,
      error: store.vacancies.error,
      i18n: store.i18n,
    }),
    dispatch => bindActionCreators({ ...vacanciesActions }, dispatch),
  ),
  withRouter
)(OpenPossitions);
