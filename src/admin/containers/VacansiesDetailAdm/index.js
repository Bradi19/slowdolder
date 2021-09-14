/* eslint-disable import/prefer-default-export,react/prop-types,react/jsx-closing-tag-location,max-len,react/no-danger */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import vacanciesActions from '../../actions/filterVacanciesActions';
import './vacanceDetailAdm.scss';


@withRouter
class VacanciesDetailClass extends Component {
  componentWillMount() {
    this.props.getVacancies();
  }
    getCurrentVacancy = () => this.props.data
      .filter(item => item.id === this.props.match.params.id)[0];

    prepareVacance = () => {
      const {
        fetching, error, activeLang, deleteVacance,
      } = this.props;

      let items = '';
      if (fetching) {
        items = <p>Loading...</p>;
      }
      if (error) {
        items = <p>Error!!!</p>;
      }
      if (!fetching) {
        const currentVacancy = this.getCurrentVacancy();
        if (currentVacancy === undefined) {
          items = <p>Loading...</p>;
        } else {
          const date = new Date(currentVacancy.publishedAt);
          items =
                    (<div className="vacanceMainCont">
                      <div className="headerCont">
                        <div>
                          <h3>{currentVacancy.longTitle[activeLang]}</h3>
                          <p>{date.toDateString()}</p>
                        </div>
                        <div className="ButtonContainer">
                          <button
                            onClick={() => {
                                  window.scrollTo(0, 0);
                                  this.props.history.push(`/vacancies/${currentVacancy.id}/edit`);
                              }}
                          >Edit
                          </button>
                          <button
                            onClick={() => {
                                  deleteVacance(currentVacancy.id);
                                  window.scrollTo(0, 0);
                                  this.props.history.push('/vacancies');
                              }}
                          >Delete
                          </button>
                        </div>
                      </div>
                      <div className="descriptionVacancyCont">
                        <div>
                          <h4>Описание</h4>
                          <br />
                          <div dangerouslySetInnerHTML={{ __html: currentVacancy.description[activeLang] }} />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: currentVacancy.body[activeLang] }} />
                      </div>
                    </div>);
        }
      }
      return items;
    };

    render() {
      return (
        <div>
          {this.prepareVacance()}
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

export const VacanciesDetailAdm = connect(mapStateToProps, mapDispatchToProps)(VacanciesDetailClass);
