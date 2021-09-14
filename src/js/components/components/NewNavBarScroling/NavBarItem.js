/* eslint-disable max-len,react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from 'react-dd-menu';
import { withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import SingleLinkComp from './SingleLinkComp';
import DropdownArrowBlue from '../../../images/menu/MenuArrowBlue.svg';
import DropdownArrowWhite from '../../../images/menu/MenuArrowWhite.svg';

@withRouter
class NavBarItem extends PureComponent {
  static propTypes = {
    subItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })),
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    redirect: PropTypes.bool,
    activeLink: PropTypes.string.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    distanceFromTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }
  openMenu = () => this.setState({ isMenuOpen: true });
  closeMenu = () => this.setState({ isMenuOpen: false });
  render() {
    const {
      subItems,
      title,
      path,
      redirect,
      activeLink,
      activeLang,
    } = this.props;
    if (subItems && subItems.length) {

      const menuOptions = {
        isOpen: this.state.isMenuOpen,
        close: this.closeMenu,
        toggle: <span><Translate value={title} /></span>,
        align: 'right',
        animate: false,
      };
      const isActive = subItems.some(item => item.path === activeLink);
      return (
        <li
          onMouseEnter={this.openMenu}
          onMouseLeave={this.closeMenu}
          className={isActive ? 'active parents' : 'parents'}
          onClick={() => this.props.history.push(subItems[0].path)}
        >
          <img
            className="dropdownIndicator"
            src={(!this.props.distanceFromTop
              || this.state.isMenuOpen
              || isActive)
              ? DropdownArrowWhite
              : DropdownArrowBlue
            }
            alt="OSSystem"
          />
          <DropdownMenu {...menuOptions} >
            {
              subItems.map(item => (
                <SingleLinkComp
                  key={item.title}
                  path={item.path}
                  className="parents"
                  title={item.title}
                  isActive={item.path === activeLink}
                  activeLang={activeLang}
                />
              ))
            }
          </DropdownMenu>
        </li>
      );
    }
    return (
      <SingleLinkComp
        key={title}
        redirect={redirect}
        path={path}
        title={title}
        isActive={activeLink === path}
        activeLang={activeLang}
      />
    );
  }
}

export default NavBarItem;
