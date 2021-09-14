/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import AboutUsItem from './AboutUsItem';
import logo from '../../../images/aboutUs/BigLogo.svg';
import { aboutItemsData } from '../../config/contacts';
import { ROUTE_MAP } from '../../constants/index';
import UIToggler from '../../containers/UIToggler';

class MainAboutSection extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
  };
  constructor(props) {
    super(props);
    this.state = {
      openDescription: false,
    };
  }
  onClick = () => {
    document.body.scrollTop = 0;
    return this.props.history.push(ROUTE_MAP.main);
  };

  prepareContentForMobile = () => {
    const { onClick } = this;
    const { openDescription } = this.state;
    return (
      <div className="main-about">
        <div className="about__description-mobile">
          <div className="img-container">
            <img src={logo} alt="INTShop" onClick={onClick} />
          </div>
          <div className="descr-container">
            <p className={`toggleDescription ${openDescription ? 'openToggleDescription' : ''}`}>
              <Translate value="about.article" />
              <Translate value="about.article2" />
            </p>
            <div className="openFullDecription" onClick={() => this.setState({ openDescription: !openDescription })}>
              <Translate value={openDescription ? 'about.closeFulldescription' : 'about.openFulldescription'} />
            </div>
          </div>
        </div>
        <div className="about-items-mobile">
          {
            aboutItemsData.map(item => (
              <div key={item.linkText} className="aboutUsMobile">
                <div className="imgCont">
                  <img height={48} src={item.imgUrl} alt="INTShop" />
                </div>
                <h3><Translate value={item.title} /></h3>
                <h4 style={{ marginBottom: 0 }}>
                  <Translate value={item.linkText} />
                  {
                    item.linkText11 &&
                    <Translate
                      value={item.linkText11}
                    />
                  }
                </h4>
              </div>
            ))
          }
        </div>
      </div>
    );
  };

  prepareContentForDescTop = () => {
    const { onClick } = this;
    return (
      <div className="main-about">
        <div className="about__description">
          <p>
            <Translate value="about.article" />
            <Translate value="about.article2" />
          </p>
          <div className="img-container">
            <img src={logo} alt="INTShop" onClick={onClick} />
          </div>
        </div>
        <div className="section about-items">
          {
            aboutItemsData.map(item => (
              <AboutUsItem
                key={item.linkText}
                item={item}
              />
            ))
          }
        </div>
      </div>
    );
  };

  render() {
    return (
      <UIToggler
        desktopComponent={this.prepareContentForDescTop()}
        tabletComponent={this.prepareContentForDescTop()}
        mobileComponent={this.prepareContentForMobile()}
      />
    );
  }
}

export default withRouter(connect(
  store => ({ res: store.response }),
  null,
)(MainAboutSection));
