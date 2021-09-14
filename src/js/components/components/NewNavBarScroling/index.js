/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import LogoComp from '../LogoCompany';
import NavBarItem from './NavBarItem';
import ChooseLang from '../ChooseLang';
import navData from '../../config/newNavbarItems';
import logoBlue from '../../../images/LogoBlue.svg';
import logo from '../../../images/Logo.svg';

import CollapsedNavBar from '../CollapsedNavBar';
import UIToggler from '../../containers/UIToggler';

class NavBarScroling extends PureComponent {
  static propTypes = {
    activeLang: PropTypes.string.isRequired,
    changeLang: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      distance: ""
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", this.menuScroling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.menuScroling);
  }

  onIconClick = () => {
    this.setState({ clicked: !this.state.clicked });
    const body = document.querySelector('body');

    if (!this.state.clicked) {
      body.setAttribute('style', 'overflow: hidden');
    } else {
      body.removeAttribute('style');
    }
  }

  menuScroling = () => {
    this.topDistanse(window.pageYOffset);
    }

  topDistanse = (scrollToTop) => this.setState({ distance: scrollToTop });
  renderMenu = () => (
    <ul className="navItems">
      {
        navData.map(item => (
          <NavBarItem
            key={item.title}
            title={item.title}
            path={item.path}
            redirect={item.redirect}
            distanceFromTop={this.state.distance}
            subItems={item.subItems} // this is subitem which you see when hover above
            activeLink={this.props.location.pathname} // Which takes text from translations.js
            activeLang={this.props.activeLang}
          />
        ))
      }
    </ul>
  );

  renderLogo = () => (
    this.state.distance
      ? <LogoComp currentLogo={logoBlue} />
      : <LogoComp currentLogo={logo} />
  );

  render() {
    const {
      activeLang,
      changeLang,
      res: { width },
    } = this.props;
    return (
      <div className="navMainScrolingContainer">
        <div className={classNames("navMainScroling", {
          mobile: width <= 1279,
          scrolled: this.state.distance,
        })}
        >
          { this.renderLogo()}
          <div className="rightBar">
            <UIToggler
              desktopComponent={this.renderMenu()}
              tabletComponent={(
                <CollapsedNavBar
                  activeLang={this.props.activeLang}
                  onIconClick={this.onIconClick}
                  clicked={this.state.clicked}
                  burgerLinkColor={this.state.distance
                    ? "#3870DE"
                    : "#FFF"
                  }
                />
              )}
              mobileComponent={(
                <CollapsedNavBar
                  activeLang={this.props.activeLang}
                  onIconClick={this.onIconClick}
                  clicked={this.state.clicked}
                  burgerLinkColor={this.state.distance
                    ? "#3870DE"
                    : "#FFF"
                  }
                />
              )}
            />
            <UIToggler
              desktopComponent={(
                <ChooseLang activeLang={activeLang} changeLang={changeLang} />
              )}
              tabletComponent={(
                <ChooseLang activeLang={activeLang} changeLang={changeLang} />
              )}
              mobileComponent={(
                <ChooseLang activeLang={activeLang} changeLang={changeLang} />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({ res: store.response }),
  null,
)(NavBarScroling);
