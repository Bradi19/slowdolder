/* eslint-disable no-restricted-globals,react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { HELMET_ROUTE_MAP } from '../../constants';
import CoursesBody from '../../components/CoursesBody/index';
import '../../../scss/career.scss';
import contactActions from '../../actions/contactActions';


class QaengineClass extends React.PureComponent {
    render() {
        const {
            i18n: { locale }
        } = this.props;
        return (
            <div className="main_container">
                <Helmet>
                    <title>{HELMET_ROUTE_MAP[locale].qaengine}</title>
                </Helmet>
                <CoursesBody courseClass="qaengine" />
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
)(QaengineClass);
