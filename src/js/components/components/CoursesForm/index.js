import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import InputMask from 'react-input-mask';
import { Translate } from 'react-redux-i18n';
import contactActions from '../../actions/contactActions';
import formCompleted from '../../../images/courses/form_completed.png';
import '../../../scss/courseForm.scss';

class CourseForm extends React.Component {
  static propTypes = {
    activeLang: PropTypes.string.isRequired,
    sendMessage: PropTypes.func.isRequired,
    didCompleted: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    hanleClick: PropTypes.func.isRequired,
    // footerFormDetecter: PropTypes.bool,
    // changeIsOpen: PropTypes.func,
  };

  // static defaultProps = {
  //   footerFormDetecter: false,
  //   changeIsOpen: false,
  // }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      name: '',
      formErrors: { email: '', phoneNumber: '', name: '' },
      emailValid: false,
      phoneNumberValid: false,
      nameValid: false,
      phoneError: 'Что-то забыли',
      emailError: 'Этот пункт очень важен',
      nameError: 'Представьтесь',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeLang !== prevProps.activeLang) {
      const { formErrors } = this.state;
      if (this.props.activeLang === 'ru') {
        formErrors.phoneNumber = formErrors.phoneNumber.length !== 0 ? 'Что-то забыли' : '';
        formErrors.email = formErrors.email.length !== 0 ? 'Этот пункт очень важен' : '';
        formErrors.name = formErrors.name.length !== 0 ? 'Представьтесь' : '';
        this.toRusLang();
      } else if (this.props.activeLang === 'ua') {
        formErrors.phoneNumber = formErrors.phoneNumber.length !== 0 ? 'Щось забули' : '';
        formErrors.email = formErrors.email.length !== 0 ? 'Цей пункт дуже важливий' : '';
        formErrors.name = formErrors.name.length !== 0 ? 'Назвiть себе' : '';
        this.toUkrLang();
      }
      this.changeLang(formErrors);
    }
  }

  changeLang = (formErrors) => {
    this.setState({
      formErrors,
    });
  }

  handleUserInput = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState(
      { [name]: value },
      () => {
        this.validateField(name, value);
      },
    );
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let { emailValid, phoneNumberValid, nameValid } = this.state;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : this.state.emailError;
        break;
      case 'phoneNumber':
        phoneNumberValid = value.match(/\+38 \(\d{3}\) \d{3} \d{4}$/);
        fieldValidationErrors.phoneNumber = phoneNumberValid ? '' : this.state.phoneError;
        break;
      case 'name':
        nameValid = value.trim().length > 3 && value.length < 25;
        fieldValidationErrors.name = nameValid ? '' : this.state.nameError;
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid,
      phoneNumberValid,
      nameValid,
    }, this.validateForm);
  }

  errorClass = (error) => {
    return (error.length === 0 ? '' : 'input_error');
  }

  toRusLang = () => {
    this.setState({
      phoneError: 'Что-то забыли',
      emailError: 'Этот пункт очень важен',
      nameError: 'Представьтесь',
    });
  }

  toUkrLang = () => {
    this.setState({
      emailError: 'Цей пункт дуже важливий',
      phoneError: 'Щось забули',
      nameError: 'Назвiть себе',
    });
  }

  formCheck() {
    if (this.props.activeLang === 'ua') {
      this.toUkrLang();
    } else if (this.props.activeLang === 'ru') {
      this.toRusLang();
    }
    const fieldValidationErrors = this.state.formErrors;
    fieldValidationErrors.name = this.state.nameValid ? '' : this.state.nameError;
    fieldValidationErrors.email = this.state.emailValid ? '' : this.state.emailError;
    fieldValidationErrors.phoneNumber = this.state.phoneNumberValid ? '' : this.state.phoneError;
    this.setState({
      formErrors: fieldValidationErrors,
    });

    const isFormValid = this.state.emailValid &&
      this.state.phoneNumberValid &&
      this.state.name;
    return isFormValid;
  }

  formCompleted = () => {
    const {
      didCompleted,
      hanleClick,
      // changeIsOpen,
      // footerFormDetecter,
    } = this.props;
    // if (footerFormDetecter) changeIsOpen();
    didCompleted();
    setTimeout(() => {
      didCompleted();
      hanleClick();
      this.setState({
        formErrors: { email: '', phoneNumber: '', name: '' },
      });
    }, 2000);
  }

  sendMessage = () => {
    if (this.formCheck()) {
      const { name, phoneNumber, email } = this.state;
      this.props.sendMessage({
        name,
        subject: phoneNumber,
        email,
        course: this.props.courseClassName
      });
      this.formCompleted();
      this.setState({
        name: '',
        phoneNumber: '',
        email: '',
      });
      this.setState({
        nameValid: false,
        emailValid: false,
        phoneNumberValid: false,
      });
    }
  }

  render() {
    const {
      formErrors,
      name,
      phoneNumber,
      email,
    } = this.state;
    const { isCompleted, courseClass } = this.props;


    return (
      <form className={courseClass}>
        <div className={isCompleted ? `form_sucsessful ${courseClass}` : 'form_sucsessful_hide'}>
          <img src={formCompleted} alt="form completed" />
        </div>
        <div className={isCompleted ? 'form_completed' : 'form_holder'}>
          <div className="form_input">
            <label className="label_name" htmlFor="name"><Translate value="courses.form.name" /></label>
            <input className={this.errorClass(formErrors.name)} maxLength="50" type="text" id="name" name="name" placeholder={this.props.activeLang === 'ru' ? 'Имя' : 'Iм\'я'} value={name} onChange={this.handleUserInput} />
            <div className="error">{formErrors.name}</div>
          </div>
          <div className="form_input">
            <label className="label_phone" htmlFor="phone">Телефон</label>
            <InputMask className={this.errorClass(formErrors.phoneNumber)} mask="+38 (999) 999 9999" maskChar=" " id="phone" name="phoneNumber" placeholder="+38(___) -___- ____" value={phoneNumber} onChange={this.handleUserInput} />
            <div className="error">{formErrors.phoneNumber}</div>
          </div>
          <div className="form_input">
            <label className="label_mail" htmlFor="email">Email</label>
            <input className={this.errorClass(formErrors.email)} maxLength="50" type="email" id="email" name="email" placeholder="example@gmail.com" value={email} onChange={this.handleUserInput} />
            <div className="error">{formErrors.email}</div>
          </div>
          {courseClass === "react" && <div className="form_text"><Translate value="courses.form.text" />:<span> HTML, CSS, JavaScript.</span></div>}
          <button type="button" className={courseClass} onClick={this.sendMessage}><Translate value="courses.form.send_btn" /></button>
        </div>
      </form>
    );
  }
}

export default connect(
  store => ({
    activeLang: store.i18n.locale,
    i18n: store.i18n,
    res: store.response,
  }),
  dispatch => bindActionCreators({ ...contactActions }, dispatch),
)(CourseForm);
