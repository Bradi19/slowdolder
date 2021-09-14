import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';

import UiToggler from '../../containers/UIToggler';
import { iconBlock } from '../../config/career';
import '../../../scss/iconblock.scss';
import '../../../scss/iconblock_mobile.scss';

class IconBlock extends PureComponent {
  static propTypes = {
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };
  renderDesktop = () => iconBlock.map((item, index) => (
    <div key={item.icon} className="icon_block__icon">
      <img src={item.icon} alt={item.icon} />
      <div className="icon_block__icon_number">{index + 1}</div>
      <div className="icon_block__icon_text">
        <Translate value={item.text} />
      </div>
    </div>
  ));

  renderMobile = () => iconBlock.map((item, index) => (
    <div key={item.text} className="icon_block__mobile">
      <div className="icon_block__mobile__number">{ index + 1 }</div>
      <div className="icon_block__mobile__right-side">
        <img src={item.icon} alt={item.icon} />
        <Translate value={item.text} />
      </div>
    </div>
  ));

  render() {
    const { width } = this.props.res;
    return (
      <div className={width >= 768 ? 'icon_block' : 'icon_block__mobile'}>
        <div className={width >= 768 ? 'icon_block__container' : 'icon_block__container__mobile'}>
          <div>
            <h3><Translate value="career.steps.header" /></h3>
          </div>
          <div className={width >= 768 ? 'icon_block__icons_set' : 'icon_block__mobile__icons_set'}>
            <UiToggler
              desktopComponent={this.renderDesktop()}
              tabletComponent={this.renderDesktop()}
              mobileComponent={this.renderMobile()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    res: store.response,
  }),
  null,
)(IconBlock);
