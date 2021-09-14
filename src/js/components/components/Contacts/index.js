import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { map } from 'ramda';
import { stateLens } from '../../lens/contactsLens';

import Input from '../Input';
import PlaneBtn from '../Buttons/PlaneBtn';
import IconHovered from '../IconHovered';
import FeedBack from '../FeedBack';

import { mainContacts, mainSocials } from '../../config/contacts';
import {
  validationObject,
  validateContactsForm,
  clearContactsState,
} from '../../utils/validations';

import plane from '../../../images/Shape.svg';
import letter from '../../../images/icon send.svg';

import '../../../scss/buttons.scss';

class Form extends Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    response: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
    contacts: PropTypes.shape({
      sendMessageSuccess: PropTypes.bool,
      sendingMessage: PropTypes.bool,
    }).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      feedBackName: '',
      isMessageSend: false,
      inputs: {
        name: {
          isValid: true,
          value: '',
          errorMessage: '',
          error: 'global_errors.name',
        },
        email: {
          isValid: true,
          value: '',
          errorMessage: '',
          error: 'global_errors.email',
        },
        subject: {
          isValid: true,
          value: '',
          errorMessage: '',
          error: 'global_errors.required_field',
        },
      },
    };
  }
  getContactItems = () => mainContacts.map(item => (
    /*
    * TODO like in footer!!!!
    *
    * */
    <div
      key={item.type}
      className="contactsInfoItem"
    >
      <div className="icon">
        <img src={item.icon} alt="" />
      </div>
      <span className="info">
        {
          item.href ?
            <a
              href={item.href === 'copy' ? '' : item.href}
              onClickCapture={item.href === 'copy' ? e => e.preventDefault() : () => {}}
            >
              <Translate value={item.text} />
            </a> :
            <Translate value={item.text} />
        }
      </span>
    </div>
  ));
  getSocials = () => mainSocials.map((item) => {
    const {
      icon,
      iconHover,
      link,
    } = item;

    return (
      <IconHovered
        key={link}
        icon={icon}
        iconHover={iconHover}
        link={link}
      />
    );
  });
  handleInputChange = (e) => {
    const newState = stateLens(
      ['inputs', e.target.name.toString(), 'value'],
      e.target.value.trimLeft(),
      this.state,
    );
    return this.setState({ ...newState });
  };
  checkAllInputs = () => {
    const inputs = map((item) => {
      if (item.value === '') {
        const { isValid } = validationObject.name(item.value);
        return {
          value: item.value,
          isValid,
          errorMessage: isValid ? '' : item.error,
          error: item.error,
        };
      }
      return { ...item };
    }, this.state.inputs);
    const { isValidForm } = validateContactsForm({ ...inputs });
    if (isValidForm) {
      const { name, email, subject } = inputs;
      this.props.sendMessage({
        name: name.value,
        email: email.value,
        subject: subject.value,
      });
      return this.setState({
        feedBackName: name.value,
        isMessageSend: true,
        inputs: { ...clearContactsState() },
      });
    }
    return this.setState({
      inputs: { ...inputs },
    });
  };
  checkOnErrors = (e) => {
    const { name, value } = e.target;
    const { isValid, errorMessage } = validationObject[name](value);
    const newState = stateLens(
      ['inputs', name],
      {
        value,
        isValid,
        errorMessage,
        error: this.state.inputs[name].error,
      },
      this.state,
    );

    this.setState({ ...newState });
  };
  renderForm = () => (
    <div className={`inputs ${this.props.response.width < 1280 && 'inputs__mobile'}`}>
      <div className="formTitle">
        <h5><Translate value="contacts.questions" /></h5>
        <img src={letter} alt="" />
      </div>
      <Input
        errorMessage={this.state.inputs.name.errorMessage}
        isValid={this.state.inputs.name.isValid}
        label="contacts.fio"
        name="name"
        type="text"
        value={this.state.inputs.name.value}
        onChange={this.handleInputChange}
        onBlur={this.checkOnErrors}
      />
      <Input
        errorMessage={this.state.inputs.email.errorMessage}
        isValid={this.state.inputs.email.isValid}
        label="contacts.email"
        name="email"
        value={this.state.inputs.email.value}
        onChange={this.handleInputChange}
        onBlur={this.checkOnErrors}
      />
      <Input
        errorMessage={this.state.inputs.subject.errorMessage}
        isValid={this.state.inputs.subject.isValid}
        label="contacts.yourQuest"
        name="subject"
        value={this.state.inputs.subject.value}
        type="textarea"
        onChange={this.handleInputChange}
        onBlur={this.checkOnErrors}
      >
        <PlaneBtn
          onClick={this.checkAllInputs}
          className="plane_btn"
          disabledClassName="plane_btn__disabled"
          src={plane}
          altText="some alt text may be :("
        />
      </Input>
    </div>
  );
  renderFeedBack = () => {
    const { sendMessageSuccess } = this.props.contacts;
    const { feedBackName } = this.state;
    return (
      <FeedBack
        onButtonClick={() => this.setState({
          feedBackName: '',
          isMessageSend: false,
        })}
        width={this.props.response.width}
        sendMessageSuccess={sendMessageSuccess}
        feedBackName={feedBackName}
      />
    );
  };
  render() {
    const { response } = this.props;
    return (
      <div className={`ourForm_container ${response.width <= 767 && 'ourForm_container__mobile'}`}>
        <div className={`ourForm ${response.width <= 767 && 'ourForm__mobile'}`}>
          <h2><Translate value="contacts.howToCont" /></h2>
          {
            this.state.isMessageSend &&
            !this.props.contacts.sendingMessage ?
              this.renderFeedBack() :
              this.renderForm()
          }
          <div className={`contacts ${response.width <= 767 && 'contacts__mobile'}`}>
            <p className="contacts__title"><Translate value="contacts.contacts" /></p>
            {this.getContactItems()}
            <div className="contactsInfoItem">
              {this.getSocials()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    response: store.response,
  }),
  null,
)(Form);
