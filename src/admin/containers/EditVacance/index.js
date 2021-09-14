/* eslint-disable import/prefer-default-export,react/prop-types,react/jsx-closing-tag-location,max-len,react/jsx-boolean-value */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import vacanciesActions from '../../actions/filterVacanciesActions';
import { VacanceEditor } from '../../components/vacanceEditor/index';

@withRouter
class EditVacanceClass extends Component {
  componentWillMount() {
    this.props.getVacancies();
  }
    getCurrentVacancy = () => this.props.data
      .filter(item => item.id === this.props.match.params.id)[0];

    prepareVacance = () => {
      const {
        fetching, error, activeLang, successEditing,
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
          items = (<div>
            <VacanceEditor
              showFullDescription={true}
              showDescription={true}
              activeLang={activeLang}
              itemProps={currentVacancy}
              onSubmit={data => this.props.editVacance(currentVacancy.id, data)}
              successEditing={successEditing}
              error={error}
            />
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
  successEditing: state.vacancies.successEditing,
  fetching: state.vacancies.fetching,
  data: state.vacancies.data,
  error: state.vacancies.error,
});
const mapDispatchToProps = () => dispatch => bindActionCreators({ ...vacanciesActions }, dispatch);

export const EditVacance = connect(mapStateToProps, mapDispatchToProps)(EditVacanceClass);
