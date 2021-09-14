import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';

import Button from '../Button';

import feedbackErrorIcon from '../../../images/contacts/feedback_error.svg';
import feedbackSuccessIcon from '../../../images/contacts/feedback_success.svg';

import '../../../scss/feedback.scss';

export default class FeedBack extends PureComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
    sendMessageSuccess: PropTypes.bool.isRequired,
    feedBackName: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    style: PropTypes.shape({}),
    buttonStyles: PropTypes.shape({}),
  };
  static defaultProps = {
    style: {},
    buttonStyles: {},
  };
  render() {
    const {
      width,
      sendMessageSuccess,
      feedBackName,
      onButtonClick,
      style,
      buttonStyles,
    } = this.props;
    return (
      <div
        className={width <= 767 ? 'feedback mobile' : 'feedback'}
        style={style}
      >
        <img
          src={sendMessageSuccess ? feedbackSuccessIcon : feedbackErrorIcon}
          alt="feedback letter icon"
        />
        <div className="feedback__title">
          {feedBackName ? `${I18n.t('contacts.feedBack.thnx')}, ${feedBackName}!` : `${I18n.t('contacts.feedBack.thnx')}!`}
        </div>
        <div className="feedback__message">
          {
            sendMessageSuccess ?
              `${I18n.t('contacts.feedBack.successMessage')}` :
              `${I18n.t('contacts.feedBack.errorMessage')}`
          }
        </div>
        <Button
          toUpperCase
          text={(
            sendMessageSuccess ?
              I18n.t('contacts.feedBack.buttonSuccess') :
              I18n.t('contacts.feedBack.buttonError')
          )}
          className="feedback__button"
          onClick={onButtonClick}
          style={buttonStyles}
        />
      </div>
    );
  }
}
