/* eslint-disable no-useless-escape,no-plusplus,jsx-a11y/label-has-for,react/require-default-props,max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import { Translate } from 'react-redux-i18n';
import FeedBack from '../FeedBack';
import Button from '../../components/Button';
import '../../../scss/aplicationForm.scss';
import FeedbackForm from './FeedbackForm';
import SendPortfolioForm from './SendPortfolioForm';

class ApplicationForm extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    reload: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    // onSendMessage: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameForCallBack: '',
      wrongNameForCallBack: false,
      nameEmpty: false,
      phoneNumber: '',
      phoneEmpty: false,
      phoneWrong: false,
      phoneNumberForCallBack: '',
      phoneNumberEmptyForCallBack: false,
      phoneNumberWrongForCallBack: false,
      email: '',
      emailEmpty: false,
      emailWrong: false,
      message: '',
      textareaRows: 1,
      minRows: 1,
      maxRows: 10,
      cvLink: '',
      fileTitle: '',
      file: null,
      fileEmpty: false,
      fileMaxSize: false,
      fileLinkWrong: false,
      openApplicationForm: false,
      isMessageSend: false,
      feedBackName: '',
    };
    this.blueButtonRef = React.createRef();
  }

  componentWillReceiveProps(next) {
    if (next.reload !== this.props.reload) {
      this.setState({
        name: '',
        nameEmpty: false,
        nameForCallBack: '',
        email: '',
        emailEmpty: false,
        emailWrong: false,
        phoneNumberForCallBack: '',
        phoneNumberEmptyForCallBack: false,
        phoneNumberWrongForCallBack: false,
        phoneNumber: '',
        phoneEmpty: false,
        phoneWrong: false,
        message: '',
        cvLink: '',
        fileTitle: '',
        file: null,
        fileEmpty: false,
        fileMaxSize: false,
        fileLinkWrong: false,
        feedBackName: this.state.name ? this.state.name : this.state.nameForCallBack,
        hover: false,
        isMessageSend: true,
      });
    }
  }
  openCloseAplicationForm = (openFormStatus) => {
    if (!this.state.openApplicationForm) {
      setTimeout(() => scrollToComponent(this.blueButtonRef.current, {
        offset: 0, align: 'top', duration: 1000,
      }), 1000);
      // this.timeOutFactory();
    }
    this.setState({
      openApplicationForm: openFormStatus,
    });
  };
  timeOutFactory = () => {
    for (let i = 300; i < 1000; i++) {
      setTimeout(() => scrollToComponent(this.blueButtonRef.current, {
        offset: 0, align: 'top', duration: 1,
      }), i);
    }
  };

  renderFeedBack = () => (
    <FeedBack
      width={this.props.width}
      sendMessageSuccess={!this.props.error}
      feedBackName={this.state.feedBackName}
      onButtonClick={() => this.setState({ isMessageSend: false, feedBackName: '' })}
      style={{ minHeight: 467 }}
    />
  );

  render() {
    const {
      openApplicationForm,
      isMessageSend,
    } = this.state;
    const { width } = this.props;

    if (isMessageSend) {
      return (
        <div className={width <= 767 ? `aplicationForm mobile` : `aplicationForm`}>
          {this.renderFeedBack()}
        </div>
      );
    }
    return (
      <div className={width <= 767 ? 'aplicationFormCont mobile' : 'aplicationFormCont'}>
        {/* <----------------------- upper form */}
        <FeedbackForm />
        <div className="orDelimiter">
          <span> </span>
          <Translate value="applicationForm.orDelimiter" />
          <span> </span>
        </div>

        <div
          ref={this.blueButtonRef}
          className={
            width <= 767 ?
              `aplicationForm mobile ${openApplicationForm ? 'openForm' : 'closeform'}` :
              `aplicationForm ${openApplicationForm ? 'openForm' : 'closeform'}`
          }
        >
          {/* <-----------------------    lower form */}
          <SendPortfolioForm
            blueButtonRef={this.blueButtonRef.current}
            openApplicationForm={openApplicationForm}
            openCloseAplicationForm={this.openCloseAplicationForm}
          />
        </div>
        <div className={`mainButtonContent ${openApplicationForm ? 'fadeBtn fadeBtn2' : 'displayBtn displayBtn2'}`}>
          <Button
            ref={(section) => { this.ButtonAplication = section; }}
            text="applicationForm.mainButton"
            onClick={this.openCloseAplicationForm}
          />
        </div>
      </div>
    );
  }
}

export default ApplicationForm;
