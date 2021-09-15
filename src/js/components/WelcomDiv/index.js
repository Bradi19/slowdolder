import React, { PureComponent } from 'react';
import { Translate } from 'react-redux-i18n';
import '../../../scss/welcomDivStyle.scss';
import bg from '../../../images/mainPage/headerImg.jpg';
import bgMob from '../../../images/mainPage/headerImgMob.jpg';

export default class WelcomeDiv extends PureComponent {
  render() {
    return (
      <div className="mainHeader">
        <div className="mainHeader__img">
          <img
            src={bg}
            alt="INTShop"
            className="mainHeader__img_large"
          />

          <img
            src={bgMob}
            alt="INTShop"
            className="mainHeader__img_mob"
          />
        </div>
        <div className="headerContent">
          <h3><Translate value="mainPage.header.title" /> <span>INTShop!</span></h3>
          <p><Translate value="mainPage.header.body" /></p>
        </div>
      </div>
    );
  }
}
