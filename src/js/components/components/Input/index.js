/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

import '../../../scss/input.scss';

export default class Input extends PureComponent {
  static propTypes = {
    errorMessage: PropTypes.string,
    isValid: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    inputClassName: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.arrayOf(PropTypes.element),
    ]),
    // onFocus: PropTypes.func,
  };
  static defaultProps = {
    errorMessage: '',
    isValid: true,
    label: '',
    id: '',
    name: '',
    value: '',
    inputClassName: '',
    type: 'text',
    onChange: arg => arg,
    onBlur: arg => arg,
    children: <span style={{ display: 'none' }} />,
    // onFocus: arg => arg,
  };
  constructor(props) {
    super(props);

    this.state = { hasFocus: false };

  }
  onChange = () => {};
  onBlur = (e) => {
    this.setState({ hasFocus: !this.state.hasFocus });

    return this.props.onBlur(e);
  }
  getInputClassName = (isValid, inputClassName) => {
    const temp = 'default-input__text-field';

    return temp.concat(
      ` ${inputClassName}`,
      (!isValid ? ' default-input__text-field__error' : ''),
    );
  };
  renderLabel = (label, name) => (
    <label
      htmlFor={name}
      className="default-input__label"
    >
      <Translate value={label} />
    </label>
  );
  renderErrorMessage = error => (
    <Translate
      value={error}
      className="default-input__error_message"
    />
  );
  renderInputField = () => (
    <input
      type={this.props.type}
      className={`${this.getInputClassName(this.props.isValid, this.props.inputClassName)} ${this.state.hasFocus && 'inFocus'}`}
      id={this.props.id}
      name={this.props.name}
      value={this.props.value}
      onChange={this.props.onChange}
      onBlur={this.onBlur}
      onFocus={() => this.setState({ hasFocus: !this.state.hasFocus })}
    />
  );
  renderTextInput = () => this.renderInputField();
  renderTextArea = () => (
    <textarea
      className={`${this.props.isValid ? 'default-input__textarea' : 'default-input__textarea__error'} ${this.state.hasFocus && ' inFocus'}`}
      id={this.props.id}
      name={this.props.name}
      value={this.props.value}
      onChange={this.props.onChange}
      onBlur={this.onBlur}
      onFocus={() => this.setState({ hasFocus: !this.state.hasFocus })}
    />
  );
  renderInputByType = (type) => {
    switch (type) {
      case 'text':
      case 'email': return this.renderTextInput();
      case 'textarea': return this.renderTextArea();
      default: return this.renderTextInput();
    }
  };
  render() {
    const {
      errorMessage,
      isValid,
      label,
      name,
      type,
      children,
    } = this.props;
    return (
      <div className="default-input">
        { label && this.renderLabel(label, name)}
        { this.renderInputByType(type)}
        { !isValid ? this.renderErrorMessage(errorMessage) : <div className="default-input__error_empty" />}
        {children}
      </div>
    );
  }
}
