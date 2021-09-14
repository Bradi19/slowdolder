/* eslint-disable react/no-array-index-key,react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/lib/md';
import { Translate } from 'react-redux-i18n';
import navData from '../../config/newNavbarItems';
import LogoComp from '../LogoCompany';
import logo from '../../../images/Logo.svg';

import '../../../scss/collapsedMenu.scss';

@withRouter
export default class CollapsedNavBar extends PureComponent {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    onIconClick: PropTypes.func.isRequired,
    clicked: PropTypes.bool.isRequired,
    burgerLinkColor: PropTypes.string,
  };

  onRedirect = (path) => () => {
    this.props.history.push(path);
    window.scrollTo(0, 0);
    return this.props.onIconClick();
  };

  languageForBlogHandler = (path, title) => {
    if (title === 'navbar.compLife' && this.props.activeLang === "ua") {
      return path + 'ua';
    }
    return path;
  };

  renderMenu = () => (
    <div className="collapsed_menu__dropdown">
      <div className="collapsed_menu__header_container">
      <LogoComp currentLogo={logo} />
      <MdClose
          onClick={this.props.onIconClick}
          size={25}
          style={{ color: 'white', cursor: 'pointer' }}
      />
      </div>

      <ul>

        {
          navData.map((item) => {
            const path = this.props.location.pathname;

            if (item.path === '') {
              return item.subItems.map(subItem => (
                <li
                  onClick={this.onRedirect(subItem.path, subItem.title)}
                  key={_.uniqueId()}
                  className={path === subItem.path ? 'active' : ''}
                >
                  <Translate value={subItem.title} />
                </li>
              ));
            }
            if (item.redirect) {
              return (
                <a href={this.languageForBlogHandler(item.path, item.title)} key={_.uniqueId()}>
                  <li
                    className={path === item.path ? "active" : ""}
                  >
                    <Translate value={item.title} />
                  </li>
                </a>
              );
            }
            return (
              <li
                onClick={this.onRedirect(item.path)}
                key={_.uniqueId()}
                className={path === item.path ? 'active' : ''}
              >
                <Translate value={item.title} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
  render() {
    return (
      <div className={this.props.clicked ? "collapsed_menu active" : "collapsed_menu"} >
        {
          !this.props.clicked &&
            <MdMenu
              onClick={this.props.onIconClick}
              size={25}
              style={{ color: this.props.burgerLinkColor, cursor: 'pointer' }}
            />
        }

        {
          this.renderMenu()
        }
      </div>
    );
  }
}
