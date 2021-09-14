/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class MainLaborSection extends PureComponent {
  static propTypes = {
    laborConditions: PropTypes.array.isRequired,
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      hoverID: -1,
    };
  }
  hoverCardDisplay = index => () => {
    this.setState({
      hoverID: index,
    });
  };

  hoverCardDisplayNone = () => {
    this.setState({
      hoverID: -1,
    });
  };

  prepareItems = (arr = []) => {
    const { hoverID } = this.state;
    const { width } = this.props.res;

    return arr.map((item, index) => (
      <div
        className={`labor-card-cont ${hoverID !== -1 ? 'hover-labor-card-cont' : ''} ${width <= 767 ? 'mobile' : ''}`}
        key={item.text}
        onMouseEnter={this.hoverCardDisplay(index)}
        onMouseLeave={this.hoverCardDisplayNone}
        onDoubleClick={this.hoverCardDisplay(index)}
      >
        {
          index === hoverID &&
          <div className="hoverDivCont">
            <div className="headerHoverDivCont">
              <img src={item.pic} alt="" />
              <div><Translate value={`${item.text}.title`} /></div>
            </div>
            <div className="bodyHoverDivCont">
              <Translate value={`${item.text}.body`} />
            </div>
          </div>
        }
        <div className="pic-cont"><img src={item.pic} alt="" /></div>
        <div className="text-cont"><Translate value={`${item.text}.title`} /></div>
      </div>
    ));
  };
  render() {
    const i = this.prepareItems(this.props.laborConditions);
    return (
      <div className="laborMain">
        <div className="top-border" />
        <div className="left-border" />
        <div className="right-border" />
        <div className="bottom-border" />
        {i}
      </div>
    );
  }
}

export default connect(
  store => ({ res: store.response }),
  null,
)(MainLaborSection);
