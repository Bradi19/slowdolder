import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import arrow from '../../../images/arrows/arrow up.svg';
import '../../../scss/dropDownMission.scss';

class DropDownMission extends PureComponent {
  static propTypes = {
    itemProps: PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
    }).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }
  render() {
    const { img, title, body } = this.props.itemProps;
    const { dropdownOpen } = this.state;
    return (
      <div className="DropDownMissionMainCont">
        <div className="DropDownMissionHeader" onClick={() => this.setState({ dropdownOpen: !dropdownOpen })} >
          <div className="DropDownMissionHeaderTitle">
            <div className="imgDivDropDown"><img src={img} alt="" /></div>
            <span><Translate value={`about.missionItem.${title}`} /></span>
          </div>
          <img src={arrow} alt="" className={dropdownOpen ? 'arrowDown' : 'arrowUp'} />
        </div>
        <div className={`DropDownMissionBodyCont ${dropdownOpen ? '' : 'closeDropDown'}`}>
          <p><Translate value={`about.missionItem.${body}`} /></p>
        </div>
      </div>
    );
  }
}

export default DropDownMission;
