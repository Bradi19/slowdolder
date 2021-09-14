import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import UIToggle from '../../containers/UIToggler';
import values from '../../../images/aboutUs/missions/values infographic.svg';
import valuesTab from '../../../images/aboutUs/missions/values 768.svg';
import valuesUa from '../../../images/aboutUs/missions/values_ua.svg';
import valuesTabUa from '../../../images/aboutUs/missions/values_tab_ua.svg';
import { MissionItems } from '../../config/missionItems';
import DropDownMissions from './DropDownMission';

class Mission extends PureComponent {
  static propTypes = {
    locale: PropTypes.shape({
      activeLang: PropTypes.string,
    }).isRequired,
  };

  prepareContentFormMobile = () =>
    (
      <div className="valuesMobile">
        { MissionItems.map(item => <DropDownMissions key={item.title} itemProps={item} />) }
      </div>
    );
  prepareContentForDesctop = () => {
    const { activeLang } = this.props.locale;
    return (
      <div className="valuesImageDiv">
        <img src={activeLang === 'ru' ? values : valuesUa} alt="" />
      </div>);
  };

  prepareContentForTab = () => {
    const { activeLang } = this.props.locale;
    return (
      <div className="valuesImageDiv">
        <img src={activeLang === 'ru' ? valuesTab : valuesTabUa} alt="" />
      </div>
    );
  };

  render() {
    return (
      <div className="missionMainCont">
        <div className="missionHeader">
          <div className="missionTitleCont">
            <h3><Translate value="about.missionTitle" /></h3>
          </div>
          <div className="missionBodyCont">
            <p><Translate value="about.missionBody" /></p>
          </div>
        </div>
        <div className="valuesMainCont">
          <div className="valuesCont">
            <h3><Translate value="about.worth" /></h3>
            <UIToggle
              desktopComponent={this.prepareContentForDesctop()}
              tabletComponent={this.prepareContentForTab()}
              mobileComponent={this.prepareContentFormMobile()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
  store => ({ res: store.response, locale: store.locale }),
  null,
)(Mission));
