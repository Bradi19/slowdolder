/* eslint-disable no-restricted-globals,react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import CoursesBody from '../../components/CoursesBody/index';
import { HELMET_ROUTE_MAP } from '../../constants';
import '../../../scss/career.scss';

import '../../../scss/coursesHeader.scss';
import contactActions from '../../actions/contactActions';

class CoursesClass extends React.PureComponent {
   render() {
    const {
      i18n: { locale },
    } = this.props;
    return (
      <div className="main_container">
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].courses}</title>
        </Helmet>
        <CoursesBody courseClass="react" />
      </div>
    );
  }
}

export default connect(
  store => ({
    i18n: store.i18n,
    res: store.response,
  }),
  dispatch => bindActionCreators({ ...contactActions }, dispatch),
)(CoursesClass);
