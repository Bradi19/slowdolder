/* eslint-disable react/prefer-stateless-function,react/prop-types,no-unused-vars,max-len,jsx-a11y/anchor-is-valid,react/jsx-no-target-blank */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../../images/logo_oss.svg';
import localeActions from '../../actions/localeActions';
import authenticationActions from '../../actions/authenticationActions';
import config from '../../../../config';

import './navBar.scss';

const localesArr = [
  'ru', 'ua',
];

const navigation = [
  {
    url: '/vacancies',
    text: 'Список вакансий',
  },
  {
    url: '/vacancies/addNewVacance',
    text: 'Добавить вакансию',
  },
  {
    url: '/events',
    text: 'Список мероприятий',
  },
  {
    url: '/events/addNewEvent',
    text: 'Добавить мероприятие',
  },
  {
    url: '/video',
    text: 'Блог',
  },
];

// @withRouter
class NavBarClass extends Component {
  static propTypes = {
    changeLang: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
  };

  changeLang = lang => () => this.props.changeLang(lang);

  logOut = () => {
    this.props.logOut();
  };

  prepareNavItems = items => items.map(item =>
    (
      <Link
        key={item.url}
        className={`link ${this.props.location.pathname === item.url ? 'selected' : ''}`}
        to={item.url}
      >
        {item.text}
      </Link>
    ));

  render() {
    const { activeLang } = this.props;
    const navItems = this.prepareNavItems(navigation);
    return (
      <div className="navBarCont">
        <div className="logoContainer"><a href={config.clientUrl} target="_blank"><img src={logo} alt="" /></a></div>
        <div className="right-container">
          {navItems}
          {localesArr.map(item => (
            <a
              href="#"
              key={item}
              className={`linkLang ${item === activeLang ? 'selected' : ''}`}
              onClick={this.changeLang(item)}
            >
              {item}
            </a>
          ))}

          <a className="link" onClick={this.logOut}>Выход</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeLang: state.locales.activeLang,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  changeLang: localeActions.changeLang,
  logOut: authenticationActions.logOut,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBarClass);
