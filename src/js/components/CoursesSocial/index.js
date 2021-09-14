import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { socialImages } from '../../config/soical';

import '../../../scss/coursesSocial.scss';

class CoursesSocial extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isShow: '',
      number: false
    };
  }

  componentDidMount() {
    this.time();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  time = () => {
    this.timer = setTimeout(() => this.setState({ isShow: 'messangers' }), 30000);
  }


  changeShow = (str) => {
    this.setState({
      isShow: str,
    });
  }

  showNumber = () => {
    this.setState({
      number: true
    });
  }


  render() {
    const { isShow } = this.state;

    const messageIcon = () => {
      return (
        <div className="flow-form-container-icon" onClick={() => this.changeShow('messangers')}>
          <div className="flow-form-wrapper">
            <span className="icon-message" />
          </div>
        </div>
      );
    };
    const wrapper = () => {
        return (
          <div className="wrapper-content">
            <div className="flow-form-container">
              <span
                className="icon-cross"
                onClick={() => this.changeShow("messageIcon")}
              />
              <div className="flow-form-wrapper">
                <div className="headerQuestion">
                  <Translate value="social.stillHaveQuestion" />
                </div>
                <div className="writeUs">
                  <div className="simpleText">
                    <Translate value="social.write" />
                  </div>
                  <div className="icons">
                    <a
                      className="icon-telegram"
                      href="https://t.me/INTShop"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (this.props.width > 1024) {
                          return this.changeShow("telegram");
                        }
                      }}
                    > </a>
                    <a
                      className="icon-viber"
                      href="viber://chat?number=%2B380504005993"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (this.props.width > 1024) {
                          return this.changeShow("viber");
                        }
                      }}
                    > </a>
                    <a
                      className="icon-whatsApp"
                      href="https://wa.me/380504005993"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (this.props.width > 1024) {
                          return this.changeShow("whatsApp");
                        }
                      }}
                    > </a>
                  </div>
                </div>
                <div className="callUs">
                  <div className="simpleText">
                    <Translate value="social.call" />
                  </div>
                  {this.state.number ? (
                    <div className="numberShowed">
                      <span className="icon-callBlack" />
                      <span className="number">
                        <Translate value="social.phoneNumber" />
                      </span>
                    </div>
                  ) : (
                    <div
                      className="showNumber"
                      onClick={() => this.showNumber()}
                    >
                      <span className="icon-callWhite" />
                      <div className="showText">
                        <Translate value="social.showButton" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
    };

    const wrapperMessanger = (image, qr) => {
      return (
        <div className="wrapper-content">
          <div className="flow-form-container">
              <span
                className="icon-cross"
                onClick={() => this.changeShow("messageIcon")}
              />
              <span
                className="icon-arrow"
                onClick={() => this.changeShow("messangers")}
              />
              <div className="flow-form-wrapper-qr">
                <div className="qrIcon">
                 <img src={image} alt="Social icon" className="qr-image" />
                  <span className="text">
                    <Translate value="social.qr" />
                  </span>
                </div>
                <div className="qrCode">
                  <img src={qr} alt="Qr code" className="img-qr" />
                </div>
            </div>
          </div>
        </div>
      );
    };

    switch (isShow) {
      case 'messageIcon': return messageIcon();
      case 'messangers': return wrapper();
      case 'whatsApp': return wrapperMessanger(socialImages.whatsAppGray, socialImages.whatsAppQr);
      case 'viber': return wrapperMessanger(socialImages.viberGray, socialImages.viberQr);
      case 'telegram': return wrapperMessanger(socialImages.telegramGray, socialImages.telegramQr);
      default: return null;
    }

  }
}

export default CoursesSocial;