/* eslint-disable import/prefer-default-export,react/prefer-stateless-function,react/prop-types,no-unused-vars,max-len,react/jsx-boolean-value */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { VacanceCard } from '../../components/VacanceCardNew/index';
import HeaderSection from '../../components/HeaderSectionAdmin';
import vacanciesActions from '../../actions/filterVacanciesActions';
import './vacanciesAdm.scss';

@withRouter
export class VacanciesClass extends Component {
  componentWillMount() {
    this.props.getVacancies();
  }

  redirect = (path) => {
    window.scrollTo(0, 0);
    this.props.history.push(path);
  };

  // <div className="deleteVacanceBtn" onClick={() => deleteVacance(item.id)}><span>&times;</span></div>

    prepareItems = () => {
      const {
        data, fetching, error, deleteVacance, activeLang,
      } = this.props;
      const items = data.map(item =>
        (
          <div className="vacanciesAdmCel" key={item.id}>
            <VacanceCard
              itemProps={item}
              activeLang={activeLang}
              onClick={() => this.redirect(`/vacancies/${item.id}/edit`)}
              onDelete={id => deleteVacance(id)}
              showDeletBtn={true}
            />
          </div>));
      return items;
    };

    render() {
      return (
        <div>
          <HeaderSection
            className="vacansiesHeaderAdm"
            title="Открытые вакансии"
          />
          <div className="vacanciesAdmFullListCont">
            {this.prepareItems()}
          </div>
        </div>

      );
    }
}


const mapStateToProps = state => ({
  activeLang: state.locales.activeLang,
  fetching: state.vacancies.fetching,
  data: state.vacancies.data,
  error: state.vacancies.error,
});
const mapDispatchToProps = () => dispatch => bindActionCreators({ ...vacanciesActions }, dispatch);

export const Vacancies = connect(mapStateToProps, mapDispatchToProps)(VacanciesClass);
