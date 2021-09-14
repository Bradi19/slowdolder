/* eslint-disable react/require-default-props,react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from 'react-redux-i18n';
import vacanciesActions from '../../actions/filterVacanciesActions';
import '../../../scss/vacancies.scss';
import ListOfVacancies from '../ListOfVacancies';
import FilterArea from '../FilterArea';
import LoaderDelay from '../../components/LoaderDelay/index';
import HeaderSection from '../../components/HeaderSection';
import ApplicationForm from '../../components/AplicationForm';
import { HELMET_ROUTE_MAP } from '../../constants';

import backgroundImage from '../../../images/background/openvacancy.jpg';

class Vacancies extends PureComponent {
  static propTypes = {
    getVacancies: PropTypes.func.isRequired,
    // sendApplication: PropTypes.func.isRequired,
    // sendApplicationForCallBack: PropTypes.func.isRequired,
    i18n: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
    fetching: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.array,
    reloadApplication: PropTypes.bool.isRequired,
    fetchingSendingApplication: PropTypes.bool.isRequired,
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };
  static defaultProps = {
    data: [],
  };
  componentWillMount() {
    this.props.getVacancies();
  }
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  componentWillReceiveProps(next) {
    if (next.i18n !== this.props.i18n) {
      this.props.getVacancies();
    }
  }
  render() {
    const {
      fetching,
      error,
      data,
      reloadApplication,
      fetchingSendingApplication,
      fetchingSendingFeedBackApplication,
      res: { width },
      i18n: { locale },
    } = this.props;
    return (
      <div className="vacansiesMainCont">
        <HeaderSection
          title="vacancies.title"
          backgroundImage={backgroundImage}
        />
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].vacancies}</title>
        </Helmet>
        {
          fetching ?
            <LoaderDelay /> :
            <div className="filterAreaCont">
              <div className="boxShedowVacance">
                {data.length !== 0 && <FilterArea possitions={data} />}
                <ListOfVacancies possitions={data} fetching={fetching} error={error} />
              </div>
            </div>
        }
        <div style={!data.length ? { marginTop: 100 } : null} className="editInfo">
          <h3><Translate value="vacancies.editInfo1" /></h3>
          <Translate value="vacancies.editInfo2" />
        </div>
        <ApplicationForm
          onSendMessage={d => this.sendAplicationForm(d)}
          reload={reloadApplication}
          fething={fetchingSendingApplication}
          fetchingSendingFeedBackApplication={fetchingSendingFeedBackApplication}
          width={width}
          error={error}
        />
      </div>
    );
  }
}

export default connect(
  store => ({
    activeLang: store.i18n.locale,
    fetching: store.vacancies.fetching,
    data: store.vacancies.data,
    error: store.vacancies.error,
    fetchingSendingApplication: store.vacancies.fetchingSendingAplication,
    fetchingSendingFeedBackApplication: store.vacancies.fetchingSendingFeedBackAplication,
    reloadApplication: store.vacancies.sendigApplicationSuccess,
    res: store.response,
    i18n: store.i18n,
  }),
  dispatch => bindActionCreators({
    getVacancies: vacanciesActions.getVacancies,
    sendApplication: vacanciesActions.sendApplication,
    sendApplicationForCallBack: vacanciesActions.sendApplicationForCallBack,
  }, dispatch),
)(Vacancies);
