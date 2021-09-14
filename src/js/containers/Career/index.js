/* eslint-disable no-restricted-globals,react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import HeaderSection from '../../components/HeaderSection/index';
import IconBlock from '../../components/IconBlock';
import CareerDevBlock from '../../components/CareerDevBlock';
import OssOffer from '../../components/OssOffer';
import { HELMET_ROUTE_MAP } from '../../constants';
import '../../../scss/career.scss';

import backgroundImage from '../../../images/background/buildcareeer.jpg';

class CareerClass extends Component {
  static propTypes = {
    activeLang: PropTypes.string.isRequired,
  };
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  render() {
    const {
      i18n: { locale },
      res: { width },
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].career}</title>
        </Helmet>
        <HeaderSection
          title="career.header"
          backgroundImage={backgroundImage}
        />
        <IconBlock />
        <CareerDevBlock lang={this.props.activeLang} width={width} />

        <OssOffer />
      </div>
    );
  }
}

export default connect(
  store => ({
    activeLang: store.i18n.locale,
    i18n: store.i18n,
    res: store.response,
  }),
  null,
)(CareerClass);
