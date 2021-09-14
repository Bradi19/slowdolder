/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import UiToggler from '../../containers/UIToggler';
import { LocalLinkBtn } from '../LocalLinkBtn';

import { careerOffer } from '../../config/career';
import '../../../scss/ossoffer.scss';

class OssOffer extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };
  linkToLabor = () => {
    this.props.history.push('/labor');
  };
  renderItems = () => careerOffer.map(item => (
    <li key={item.text}>
      <img src={item.icon} alt={item.icon} />
      <div><Translate value={item.text} /></div>
    </li>
  ));
  render() {
    const { width } = this.props.res;
    return (
      <div className={width <= 767 ? 'ossoffer mobile' : 'ossoffer'}>
        <h3><Translate value="career.offers.header" /></h3>

        <div className="ossoffer__container">
          <ul className={width >= 768 ? 'ossoffer__items' : 'ossoffer__items oss_modif'}>
            <UiToggler
              desktopComponent={this.renderItems()}
              tabletComponent={this.renderItems()}
              mobileComponent={this.renderItems()}
            />
          </ul>
        </div>

        {
          width <= 767 ?
            (
              <div>
                <LocalLinkBtn
                  text="common.more"
                  linkTo="/labor"
                  whiteArrow={false}
                />
              </div>
            ) :
            (
              <div className="ossoffer_btn">
                <button className="default_button" onClick={this.linkToLabor}>
                  <Translate value="common.more" />
                </button>
              </div>
            )
        }
      </div>
    );
  }
}

export default withRouter(connect(
  store => ({
    res: store.response,
  }),
  null,
)(OssOffer));
