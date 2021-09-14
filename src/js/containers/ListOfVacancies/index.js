/* eslint-disable react/forbid-prop-types,react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { VacanceCard } from '../../components/VacanceCard/index';
import '../../../scss/vacancies.scss';

import { vacanciesSelector } from '../../reducers/vacancies';

@withRouter
class ListOfVacancies extends PureComponent {
  static propTypes = {
    vacancies: PropTypes.array,
  };
  static defaultProps = {};
  prepareItems = vacancies => vacancies.map(item => (
    <div
      className="vacanceCel"
      key={item.id}
    >
      <VacanceCard
        itemProps={item}
      />
    </div>
  ));
  render() {
    const vacanciesList =
      this.prepareItems(this.props.vacancies);
    return (
      <div className="vacanceList">
        {vacanciesList}
      </div>
    );
  }
}

export default connect(
  store => ({
    vacancies: vacanciesSelector(store),
  }),
  null,
)(ListOfVacancies);
