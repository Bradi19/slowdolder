/* eslint-disable no-restricted-globals */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import HeaderSection from '../HeaderSection/index';
import MainAboutSection from './MainAboutSection';
import { History } from './History';
import { HELMET_ROUTE_MAP } from '../../constants';
import Mission from './Mission';
import backgroundImage from '../../../images/background/companyossystem.jpg';

class AboutUs extends PureComponent {
  static propTypes = {
    i18n: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
  };

  componentDidMount() {
    document.body.scrollTop = 0;
  }
  render() {
    const { locale } = this.props.i18n;
    return (
      <div className="aboutUs">
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].about}</title>
        </Helmet>
        <HeaderSection
          backgroundImage={backgroundImage}
          title="about.title"
        />
        <MainAboutSection />
        <Mission />
        <History />
      </div>
    );
  }
}

export default connect(
  store => ({ i18n: store.i18n }),
  null,
)(AboutUs);
