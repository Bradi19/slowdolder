/* eslint-disable react/prop-types */
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
import '../../../scss/companyOffersStyle.scss';
import { shortLaborConditions } from '../../config/laborConditions';
import AboutUsItem from '../AboutUs/AboutUsItem';
import Button from '../Button';
import UIToggler from '../../containers/UIToggler';
import { LocalLinkBtn } from '../LocalLinkBtn/index';
import { ROUTE_MAP } from '../../constants/index';

@withRouter
export default class CompanyOffers extends Component {
  static propTypes = {};
  static defaultProps = {};

  redirect = () => {
    document.body.parentNode.scrollTop = 0;
    this.props.history.push(ROUTE_MAP.labor);
  };


  prepareBtn = () => (<div className="allLaborCondBtn"><Button text="mainPage.weOffer.buttonTitle" onClick={this.redirect} /></div>);

  render() {
    return (
      <div className="main-labor-cont">
        <div className="main-labor-cont-title"><Translate value="mainPage.weOffer.title" /></div>
        <div className="main-labor-cond-items">
          {
            shortLaborConditions.map(item => (
              <AboutUsItem
                key={item.linkText}
                item={item}
                mainClass="main-labor-cond-item"
                bodyClass="main-labor-cond-body"
                titleClass="main-labor-cond-title"
                textClass="main-labor-cond-text"
                imgClass="main-labor-condIMG"
              />
            ))
          }
        </div>
        <UIToggler
          desktopComponent={this.prepareBtn()}
          tabletComponent={this.prepareBtn()}
          mobileComponent={<LocalLinkBtn linkTo={ROUTE_MAP.labor} text="mainPage.weOffer.buttonTitle" whiteArrow={false} className="arrowWeOffer" />}
        />

      </div>
    );
  }
}
