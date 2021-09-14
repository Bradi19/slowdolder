import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import OpenPossitions from '../../components/OpenPossitions';
import CompanyOffers from '../../components/CompanyOffers/index';
import WelcomeDiv from '../../components/WelcomDiv/index';
import CompanyBlog from '../CompanyBlog/index';
import CompanyIntroduction from '../../components/CompanyIntroduction/index';
import { HELMET_ROUTE_MAP } from '../../constants';

class MainPage extends PureComponent {
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
      <div>
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].main}</title>
        </Helmet>
        <WelcomeDiv />
        <OpenPossitions />
        <CompanyIntroduction {...this.props} />
        <CompanyOffers />
        <CompanyBlog />
      </div>
    );
  }
}

export default connect(
  store => ({ i18n: store.i18n }),
  null,
)(MainPage);
