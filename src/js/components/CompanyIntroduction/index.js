import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import { ROUTE_MAP } from '../../constants/index';
import { aboutItemsData, aboutItemsDataMobile } from '../../config/contacts';
import AboutUsItem from '../AboutUs/AboutUsItem';
import '../../../scss/companyIntroductionStyle.scss';
import arrow from '../../../images/mainPage/arrow.svg';
import UIToggler from '../../containers/UIToggler';
import { LocalLinkBtn } from '../LocalLinkBtn/index';

export default class CompanyIntroduction extends PureComponent {
  prepareBlock = () => (
    <div className="company_info">
      <div className="main-about-description">
        <h4><Translate value="about.title" /></h4>
        <p><Translate value="about.shortArticle" /></p>
        <Link to={ROUTE_MAP.about} onClick={() => { document.body.parentNode.scrollTop = 0; }}>
          <div className="linkToAboutUs">
            <Translate value="mainPage.aboutUsBtn" />
            <img src={arrow} alt="" />
          </div>
        </Link>
      </div>
      <div className="main-about-items">
        {
          aboutItemsData.map(item => (
            <AboutUsItem
              key={item.linkText}
              item={item}
              mainClass="main-about-item"
              bodyClass="main-about-body"
              titleClass="main-about-title"
              textClass="main-about-text"
              imgClass="main-aboutIMG"
            />
          ))
        }
      </div>
    </div>
  );

  prepareBlockForMobile = () => (
    <div className="company_info-mobile">

      <h4><Translate value="about.title" /></h4>
      <p><Translate value="about.shortArticle" /></p>

      <div className="main-about-items-mobile">
        {
          aboutItemsDataMobile.map(item => (
            <div key={item.title} className="itemAboutUs-mobile">
              <img src={item.imgUrl} alt="" />
              <p><Translate value={item.title} /></p>
            </div>
          ))
        }
      </div>
      <LocalLinkBtn text="mainPage.aboutUsBtn" linkTo={ROUTE_MAP.about} />
    </div>
  );

  render() {
    return (
      <UIToggler
        desktopComponent={this.prepareBlock()}
        tabletComponent={this.prepareBlock()}
        mobileComponent={this.prepareBlockForMobile()}
      />
    );
  }
}

