/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import HeaderSection from '../HeaderSection/index';
import MainLaborSection from './MainLaborSection';
import { laborConditions } from '../../config/laborConditions';
import { HELMET_ROUTE_MAP, ROUTE_MAP } from '../../constants';
import Button from '../Button';

import backgroundImage from '../../../images/background/weoffer.jpg';

class LaborConditions extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    i18n: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  redirect = () => {
    document.body.parentNode.scrollTop = 0;
    this.props.history.push(ROUTE_MAP.vacancies);
  };
  render() {
    const { locale } = this.props.i18n;

    return (
      <div className="laborConditions">
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].labor}</title>
        </Helmet>
        <HeaderSection
          title="laborConditions.title"
          backgroundImage={backgroundImage}
        />
        <div
          className={this.props.res.width <= 767 ? 'laborMainConteiner mobile' : 'laborMainConteiner'}
        >
          <MainLaborSection laborConditions={laborConditions} />
        </div>
        <Button style={{ marginTop: 60 }} text="mainPage.vacanciesBtn" onClick={this.redirect} />
      </div>
    );
  }
}

export default connect(
  store => ({ res: store.response, i18n: store.i18n }),
  null,
)(LaborConditions);
