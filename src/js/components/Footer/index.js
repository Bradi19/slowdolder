/* eslint-disable import/prefer-default-export,no-restricted-syntax,react/no-array-index-key,react/require-default-props,max-len */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import copy from 'copy-to-clipboard';
import IconHovered from '../IconHovered';
import UIToggle from '../../containers/UIToggler';
import '../../../scss/footer.scss';
import logofooter from '../../../images/footer/FooterLogo.png';
// import logomob from '../../../images/footer/logomob.svg';
import footerNavItems from '../../config/footerNavItems';
import { mainContacts, mainSocials } from '../../config/contacts';
import { ROUTE_MAP } from '../../constants/index';

@withRouter
export class Footer extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
  };
  constructor(props) {
    super(props);

    this.state = {
      email: false,
      phone: false,
      adress: false,
    };
  }
  onTouchStart = (type) => {
    this.setState(prevState => ({
      ...this.resetState(prevState),
      [type]: true,
    }));
  };
  onTouchEnd = (href) => {
    this.setState(prevState => this.resetState(prevState));
    return href === 'copy' ? '#' : href;
  };
  resetState = (state) => {
    const temp = {};
    for (const key of Object.keys(state)) {
      temp[key] = false;
    }

    return { ...temp };
  };
  copyText = (e) => {
    e.preventDefault();
    const coppyString = e.currentTarget.childNodes[0].innerHTML.replace('(WhatsUp/Viber/Telegram)', '').trim();
    copy(coppyString);
  };
  prepareNavItems = () => footerNavItems.map(item => {
    if (!item.redirect) {
      return (
        <p key={item.path} style={{ cursor: 'pointer' }}>
          <span
            onClick={
              () => {
                document.body.parentNode.scrollTop = 0;
                this.props.history.push(item.path);
              }
            }
          >
            <Translate value={item.title} style={{ textTransform: 'uppercase' }} />
          </span>
        </p>
      );
    } else if (item.redirect) {
      return (
        <a key={item.path} href={item.path} >
          <p style={{ cursor: 'pointer' }}>
            <span>
              <Translate value={item.title} style={{ textTransform: 'uppercase' }} />
            </span>
          </p>
        </a>
      );
    }
  });

  // this.copyText

  prepareNavContacts = () => mainContacts.map((item, index) => {
    return (
      <a
        className={this.state[item.type] ? "active" : ""}
        key={index}
        onClick={
          item.href === "copy" ? this.redirect(ROUTE_MAP.contacts) : () => ({})
        }
        href={item.href === "copy" ? "#" : item.href}
        onTouchEnd={() => this.onTouchEnd(item.href, item.type)}
        onTouchStart={() => this.onTouchStart(item.type)}
      >
        <Translate value={item.text} />
      </a>
    );
  });
  prepareSocialsIcons = () => mainSocials.map((item, index) => {
    const {
      footerIcon,
      footerHoverIcon,
      link,
    } = item;

    return (
      <IconHovered
        key={index}
        icon={footerIcon}
        iconHover={footerHoverIcon}
        link={link}
      />
    );
  });
  prepareBreakPoint = (arr) => {
    const l = arr.length;
    return (l - (l % 3)) / 3;
  };

  redirect = path => () => {
    document.body.parentNode.scrollTop = 0;
    this.props.history.push(path);
  };
  renderFooterNavigation = () => {
    const navItemsArr = this.prepareNavItems();
    const bp = this.prepareBreakPoint(navItemsArr);

    return (
      <div className="NavContainer">
        <div>
          <div>
            {navItemsArr.splice(0, bp)}
          </div>
          <div>
            {navItemsArr.splice(0, bp)}
          </div>
          <div>
            {navItemsArr}
          </div>
        </div>
      </div>
    );
  };
  renderFooter = (view = 'desktop') => {
    const navContacts = this.prepareNavContacts();
    const icons = this.prepareSocialsIcons();
    const currentYear = new Date().getFullYear();

    return (
      <footer className="FooterContainer">
        <div className="LogoContainer">
          <img
            onClick={this.redirect('/')}
            src={logofooter}
            style={{ cursor: 'pointer' }}
            alt=""
          />
        </div>
        { view === 'desktop' && this.renderFooterNavigation() }
        <div className="ContactsContainer">
          {navContacts}
        </div>
        <div>
          <div className="IconContainers">
            { icons }
          </div>
          <p>
            &copy;2007-{currentYear} All Rights Reserved
          </p>
        </div>
      </footer>
    );
  };
  renderMobileFooter = () => {
    const navContacts = this.prepareNavContacts();
    const icons = this.prepareSocialsIcons();
    const currentYear = new Date().getFullYear();

    return (
      <footer className="FooterContainer__mobile">
        <div className="LogoContainer">
          <img
            onClick={this.redirect('/')}
            src={logofooter}
            style={{ cursor: 'pointer' }}
            alt=""
          />
        </div>
        <div className="ContactsContainer">
          {navContacts}
        </div>
        <div className="IconContainersMob">
          <div>
            { icons }
            <p>
              &copy;2007-{currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  };
  render() {
    return (
      <UIToggle
        desktopComponent={this.renderFooter()}
        tabletComponent={this.renderFooter('mobile')}
        mobileComponent={this.renderMobileFooter()}
      />
    );
  }
}
