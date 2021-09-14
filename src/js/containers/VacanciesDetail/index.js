/* eslint-disable no-restricted-globals,react/prop-types */
import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderSection from '../../components/HeaderSection/index';
import Loader from '../../components/LoaderDelay';
import vacanciesActions from '../../actions/filterVacanciesActions';
import { vacancySelector } from '../../reducers/vacancies';
import ApplicationForm from '../../components/AplicationForm';
import '../../../scss/vacancydetail.scss';
import { HELMET_ROUTE_MAP, ROUTE_MAP } from '../../constants';
import arrow from '../../../images/mainPage/arrow.svg';
import NotFound from '../../components/NotFound';
import backgroundImage from '../../../images/background/profilevacansy.jpg';

@withRouter
class VacancyDetail extends PureComponent {
  static propTypes = {
    getVacancies: PropTypes.func.isRequired,
    sendApplication: PropTypes.func.isRequired,
    sendApplicationForCallBack: PropTypes.func.isRequired,
    reloadApplication: PropTypes.bool.isRequired,
    fetchingSendingApplication: PropTypes.bool.isRequired,
    fetchingSendingFeedBackApplication: PropTypes.bool.isRequired,
    currentVacancy: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      publishedAt: PropTypes.string,
    }),
    fetching: PropTypes.bool.isRequired,
    // error: PropTypes.string,
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };

  static defaultProps = {
    currentVacancy: null,
  };

  componentDidMount() {
    this.props.getVacancies();
    document.body.scrollTop = 0;
  }

  componentWillReceiveProps(next) {
    // if (!this.props.currentVacancy) this.props.history.push('/notFounde');
    if (next.i18n !== this.props.i18n) {
      this.props.getVacancies();
    }
  }

  sendAplicationForm = (data) => {
    const formData = new FormData();

    if (!data.nameForCallBack && !data.phoneNumberForCallBack) {
      formData.append('body', JSON.stringify({
        email: data.email,
        name: data.name,
        vacanceID: this.props.currentVacancy.id,
        message: data.message,
        cvLink: data.cvLink,
        nameForCallBack: data.nameForCallBack,
        phoneNumberForCallBack: data.phoneNumberForCallBack,
      }));
      formData.append('resume', data.file);
      this.props.sendApplication(formData);
    } else {
      formData.append('vacancyId', this.props.currentVacancy ? this.props.currentVacancy.id : '');
      formData.append('name', data.nameForCallBack);
      formData.append('phoneNumber', data.phoneNumberForCallBack);
      this.props.sendApplicationForCallBack(formData);
    }
  };

  renderHeaderContent = () => {
    const {
      publishedAt,
    } = this.props.currentVacancy;
    const { locale } = this.props.i18n;
    return (
      <div>
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].vacancyDetail}</title>
        </Helmet>
        <div className="vacancy_detail__header_description">
          <p>{moment(publishedAt).format('DD.MM.YYYY')}</p>
        </div>
      </div>
    );
  };


  render() {
    const {
      currentVacancy: vacancy,
      fetching,
      reloadApplication,
      fetchingSendingApplication,
      fetchingSendingFeedBackApplication,
      error,
      res: { width },
    } = this.props;

    if (fetching) {
      return <Loader />;
    }

    if (!vacancy && !fetching) {
      return <NotFound />;
    }

    return (
      <div className="vacancy_detail">
        <HeaderSection
          title={vacancy && vacancy.title}
          titleNoTranslate
          backgroundImage={backgroundImage}
          level={vacancy && vacancy.level}
        >
          {vacancy && vacancy.title && this.renderHeaderContent()}
        </HeaderSection>
        {
          vacancy && (
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: vacancy.body.replace(/<a/g, `<a target="_blank rel="noopener noreferrer""`) }}
              className={width <= 767 ? 'vacancy_detail__main mobile' : 'vacancy_detail__main'}
            />
          )
        }
        <Link to={ROUTE_MAP.vacancies} onClick={() => { document.body.scrollTop = 0; }}>
          <img src={arrow} alt="" className="arrowBack" />
        </Link>

        <div className={width <= 767 ? 'vacansyAplicationCont mobile' : 'vacansyAplicationCont'}>
          <ApplicationForm
            onSendMessage={d => this.sendAplicationForm(d)}
            reload={reloadApplication}
            fething={fetchingSendingApplication}
            fethingFeedBack={fetchingSendingFeedBackApplication}
            width={width}
            error={error}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  (store, props) => ({
    fetching: store.vacancies.fetching,
    currentVacancy: vacancySelector(store, props),
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
)(VacancyDetail);
