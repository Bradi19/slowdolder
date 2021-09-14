import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import InputMask from 'react-input-mask';
import Button from '../../components/Button';
import Loader from '../loader';
import vacanciesActions from '../../actions/filterVacanciesActions';

const FeedbackForm = ({ fetchingSendingFeedBackApplication, sendApplicationForCallBack, getVacancies }) => {

    const [nameForCallBack, setNameForCallBack] = useState('');
    const [wrongNameForCallBack, setWrongNameForCallBack] = useState(false);
    const [phoneNumberForCallBack, setPhoneNumberForCallBack] = useState('');
    const [phoneNumberEmptyForCallBack, setPhoneNumberEmptyForCallBack] = useState(false);
    const [phoneNumberWrongForCallBack, setPhoneNumberWrongForCallBack] = useState(false);
    const handleMandatoryForCallBackInputChange = (event) => {
        const { value } = event.target;
        const emptyValue = value === '';
        if (event.target.name === 'nameForCallBack') {
            setNameForCallBack(value);
            setWrongNameForCallBack(!emptyValue && !value.match(/^[a-zA-Zа-яА-ЯёЁ]{2}[a-zA-Zа-яА-ЯёЁ\-\s]{0,28}$/));
        }
        if (event.target.name === 'phoneNumberForCallBack') {
            setPhoneNumberForCallBack(value);
            setPhoneNumberEmptyForCallBack(emptyValue);
            setPhoneNumberWrongForCallBack(!value.match(/^\+380\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/));
        }
    };
    const beforeMaskedValueChange = (newState, oldState, userInput) => {
        let { value, selection } = newState;
        let cursorPosition = selection ? selection.start : null;

        if (value.endsWith('-') && userInput !== '-' && !this.state.value.endsWith('-')) {
            if (cursorPosition === value.length) {
                cursorPosition -= cursorPosition;
                selection = { start: cursorPosition, end: cursorPosition };
            }
            value = value.slice(0, -1);
        }

        return {
            value,
            selection
        };
    };


    const sendAplicationForms = (data) => {
        const currentVacancy = getVacancies();
        const formData = new FormData();
        formData.append('vacancyId', currentVacancy.id ? currentVacancy.id : '');
        formData.append('name', data.nameForCallBack);
        formData.append('phoneNumber', data.phoneNumberForCallBack);
        sendApplicationForCallBack(formData);
    };

    const sendMessageForCallBack = () => {
        if (
            !wrongNameForCallBack &&
            nameForCallBack &&
            phoneNumberForCallBack &&
            !phoneNumberEmptyForCallBack &&
            !phoneNumberWrongForCallBack
        ) {
            sendAplicationForms({
                nameForCallBack,
                phoneNumberForCallBack,
            });
        } else {
            if (!nameForCallBack) {
                setWrongNameForCallBack(true);
            } else if (!phoneNumberForCallBack) {
                setPhoneNumberEmptyForCallBack(true);
            }
            setPhoneNumberForCallBack('');
        }
    };

    return (
        <div className="callBackForm">
            <div className="inputs">
                <label className={!wrongNameForCallBack ? '' : 'errorLable'}>
                    {!wrongNameForCallBack ? <Translate value="applicationForm.nameTitleRequired" /> : <Translate value="applicationForm.wrongNameForCallBack" />}
                    <input
                        onChange={handleMandatoryForCallBackInputChange}
                        name="nameForCallBack"
                        className="formInp"
                        value={nameForCallBack}
                        maxLength="25"
                        disabled={fetchingSendingFeedBackApplication}
                    />
                </label>
                <div></div>
                <label className={phoneNumberEmptyForCallBack || phoneNumberWrongForCallBack ? 'errorLable' : ''}>
                    {!phoneNumberEmptyForCallBack && !phoneNumberWrongForCallBack && <Translate value="applicationForm.phoneTitle" />}
                    {phoneNumberEmptyForCallBack && <Translate value="applicationForm.phoneEmptyErr" />}
                    {phoneNumberWrongForCallBack && !phoneNumberEmptyForCallBack && <Translate value="applicationForm.phoneWrongErr" />}
                    <InputMask
                        mask="+380 (99) 999-99-99"
                        placeholder="+380 (XX) XXX-XX-XX"
                        onChange={handleMandatoryForCallBackInputChange}
                        beforeMaskedValueChange={beforeMaskedValueChange}
                        name="phoneNumberForCallBack"
                        className={phoneNumberEmptyForCallBack ? 'errFormInp' : 'formInp'}
                        value={phoneNumberForCallBack}
                        disabled={fetchingSendingFeedBackApplication}
                    />
                </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    text={fetchingSendingFeedBackApplication ? '' : 'applicationForm.getCallBack'}
                    onClick={fetchingSendingFeedBackApplication ? null : sendMessageForCallBack}
                    disabled={fetchingSendingFeedBackApplication}
                    style={{ width: '100%', height: 55 }}
                />
                {fetchingSendingFeedBackApplication && <Loader className="cv-path" svgStyle={{ height: '65%' }} />}
            </div>
        </div>
    );
};


const MapStateToProps = (state) => {
    return {
        fetchingSendingFeedBackApplication: state.vacancies.fetchingSendingFeedBackAplication
    };
};

export default connect(MapStateToProps, {
    sendApplicationForCallBack: vacanciesActions.sendApplicationForCallBack,
    getVacancies: vacanciesActions.getVacancies,
})(FeedbackForm);
