/* eslint-disable import/prefer-default-export,react/prefer-stateless-function,react/forbid-prop-types,max-len,react/require-default-props,jsx-a11y/anchor-is-valid,react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MessageBlock } from '../../components/messageBlock/index';
import './loginAdm.scss';
import authenticationActions from '../../actions/authenticationActions';
import logo from '../../../images/logo_oss.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showMessage: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.history.push('/vacancies');
    }
    if (nextProps.wrongUserData !== this.props.wrongUserData) {
      this.setState({ showMessage: !this.state.showMessage });
    }
  }

  onSubmit = (e) => {
    if (e.keyCode === 13) {
      this.logIn();
    }
  };
  logIn = () => this.props.login(this.state);

  render() {
    return (
      <div className="modalBackgroundLogin" onKeyDown={this.onSubmit}>
        <MessageBlock
          text="Вы ввели неправельный пароль или имя пользователя!"
          show={this.state.showMessage}
          success={false}
        />
        <div className="modalCont">
          <div className="modalHeader"><img src={logo} alt="" /></div>
          <div className="modalBody">
            <div>
              <p>Login:</p>
              <input
                type="text"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
              />
            </div>
            <div>
              <p>Password:</p>
              <input
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
          </div>
          <div className="modalButtonContainer">
            <button onClick={this.logIn}>Log In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    isAuthenticated: store.authentication.isAuthenticated,
    wrongUserData: store.authentication.wrongUserData,
  }),
  dispatch => bindActionCreators({ ...authenticationActions }, dispatch),
)(Login);
