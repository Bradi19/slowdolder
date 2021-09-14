/* eslint-disable import/prefer-default-export,react/prop-types,react/jsx-closing-tag-location,max-len */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import vacanciesActions from '../../actions/filterVacanciesActions';
import { VacanceEditor } from '../../components/vacanceEditor/index';

@withRouter
class AddNewVacanceClass extends Component {
  render() {
    const {
      addVacance,
      successAdding,
      activeLang,
      error,
    } = this.props;
    return (
      <div>
        <VacanceEditor
          onSubmit={data => addVacance(data)}
          activeLang={activeLang}
          reset={successAdding}
          error={error}
        />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  activeLang: state.locales.activeLang,
  successAdding: state.vacancies.successAdding,
  fetching: state.vacancies.fetching,
  error: state.vacancies.error,
});
const mapDispatchToProps = () => dispatch => bindActionCreators({ ...vacanciesActions }, dispatch);

export const AddNewVacance = connect(mapStateToProps, mapDispatchToProps)(AddNewVacanceClass);
