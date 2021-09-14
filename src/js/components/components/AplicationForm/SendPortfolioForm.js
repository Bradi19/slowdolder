import React, { useRef, useState } from "react";
import { Translate } from 'react-redux-i18n';
import { connect } from "react-redux";
import Button from '../../components/Button';
import exitIcon from '../../../images/exit icon.svg';
import attachWhite from '../../../images/aplicationForm/attachment_green.svg';
import attachBlue from '../../../images/aplicationForm/attachment blue for white.svg';
import attachBlueHover from '../../../images/aplicationForm/attachmenthover.svg';
import closeImgBlue from '../../../images/aplicationForm/cancel blue.svg';
import Loader from '../loader';
import vacanciesActions from "../../actions/filterVacanciesActions";

const FILE_MAX_SIZE = 10485760;
const FILE_EXTS = ['.doc', '.docx', '.pdf'];

const SendPortfolioForm = (props) => {
    const {
        fethingPortfolio,
        sendApplicationPortfolioForm,
        getVacancies,
        openApplicationForm,
        openCloseAplicationForm
    } = props;


    const [name, setName] = useState('');
    const [nameEmpty, setNameEmpty] = useState(false);
    const [email, setEmail] = useState('');
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [emailWrong, setEmailWrong] = useState(false);
    const [cvLink, setCvLink] = useState('');
    const [fileTitle, setFileTitle] = useState('');
    const [file, setFile] = useState(null);
    const [fileEmpty, setFileEmpty] = useState(false);
    const [fileMaxSize, setFileMaxSize] = useState(false);
    const [fileLinkWrong, setFileLinkWrong] = useState(false);
    const [textareaRows, setTextareaRows] = useState(1);
    const [hover, setHover] = useState(false);
    const minRows = 1;
    const maxRows = 10;
    const width = 1;
    const [message, setMessage] = useState('');
    const phoneNumber = '';


    const downloadFileRef = useRef();

    const sendAplicationForm = (data) => {
        const currentVacancy = getVacancies();
        const formData = new FormData();
        formData.append('body', JSON.stringify({
            email: data.email,
            name: data.name,
            vacanceID: currentVacancy ? currentVacancy.id : '',
            message: data.message,
            cvLink: data.cvLink,
            nameForCallBack: data.nameForCallBack,
            phoneNumberForCallBack: data.phoneNumberForCallBack,
        }));
        formData.append('resume', data.file);
        sendApplicationPortfolioForm(formData);
    };
    const sendMessage = () => {
        if (name && email && !emailWrong && !fileEmpty && (cvLink || file)) {
            sendAplicationForm({
                name,
                phoneNumber,
                email,
                message,
                cvLink: file ? '' : cvLink,
                file,
            });
        } else {
            if (!name) {
                setNameEmpty(true);
            }
            if (!email) {
                setEmailEmpty(true);
            }
            setFileEmpty(!(!!cvLink || !!file));
        }
    };
    const handleInputUploadFile = (event) => {
        const filed = event.target.files[0];

        if (filed.size > FILE_MAX_SIZE) {
            setFileMaxSize(true);
            return;
        }

        const fileTitled = filed.name;
        const ext = fileTitled.substring(fileTitled.lastIndexOf('.')).toLowerCase();

        if (FILE_EXTS.indexOf(ext) !== -1) {
            setFileTitle(fileTitled);
            setFile(filed);
            setFileEmpty(false);
            setFileMaxSize(false);

        } else {
            setFileEmpty(false);
            setFileLinkWrong(true);
        }
    };
    const handleInputChange = (event) => {
        const textareaLineHeight = 24;
        const textarea = event.target;
        const previousRows = textarea.rows;
        textarea.rows = minRows;
        const currentRows = Math.trunc(textarea.scrollHeight / textareaLineHeight);

        currentRows > 1 ? textarea.style.overflow = 'auto' : textarea.style.overflow = 'hidden';
        currentRows === previousRows ? textarea.rows = currentRows : '';
        currentRows >= maxRows ? textarea.rows = maxRows : textarea.scrollTop = textarea.scrollHeight;
        setTextareaRows(currentRows < maxRows ? currentRows : maxRows);
        setMessage(event.target.value);
        // this.setState({
        //     [event.target.name]: event.target.value,
        // });
    };
    const deleteFile = () => {
        downloadFileRef.value = '';

        setFileTitle('');
        setFile(null);
        setCvLink('');
        setFileEmpty(true);
    };
    const handleMandatoryInputChange = (event) => {
        const { value } = event.target;
        const emptyValue = value === '';
        const regMail = /^([A-z0-9_-]+\.)*[A-z0-9_-]+@[A-z0-9_-]+(\.[A-z0-9_-]+)*\.[A-z]{2,6}$/;
        const regLink = /^(https?|ftp)\/\/[a-zA-Z0-9\]+[a-z]{2,}(\/.+)$/;

        if (event.target.name === 'name') {
            setName(value);
            setNameEmpty(emptyValue);
        }
        if (event.target.name === 'email') {
            setEmail(value);
            setEmailEmpty(emptyValue);
            setEmailWrong(!regMail.test(value));
        }
        if (event.target.name === 'cvLink') {
            setCvLink(value);
            setFileEmpty(emptyValue && !file);
            setFileLinkWrong(!regLink.test(value));
            setFileMaxSize(file ? file.size <= FILE_MAX_SIZE : false);
        }
    };
    let cvLinkText = 'applicationForm.fileTitle';

    if (fileMaxSize) {
        cvLinkText = 'applicationForm.fileMaxSize';
    } else if (fileEmpty) {
        cvLinkText = 'applicationForm.fileEmptyErr';
    } else if (!file && fileLinkWrong) {
        cvLinkText = 'applicationForm.fileLinkWrong';
    }

    return (
        <div className={width <= 767 ? 'inputs mobile' : 'inputs'}>
            <div className="formTitle">
                <h5><Translate value="applicationForm.title" /></h5>
                <img
                    src={exitIcon}
                    onClick={() => openCloseAplicationForm(!openApplicationForm)}
                    alt="grom"
                />
            </div>
            <label htmlFor="name" className={nameEmpty ? 'errorLable' : ''}>
                <Translate value={nameEmpty ? 'applicationForm.nameEmptyErr' : 'applicationForm.nameTitleRequired'} />
            </label>
            <input
                onChange={handleMandatoryInputChange}
                name="name"
                className={nameEmpty ? 'errFormInp' : 'formInp'}
                value={name}
                disabled={fethingPortfolio}
            />

            <label htmlFor="email" className={emailEmpty || emailWrong ? 'errorLable' : ''}>
                {
                    emailEmpty || emailWrong ?
                        <Translate value={emailEmpty ? 'applicationForm.emailEmptyErr' : 'applicationForm.emailWrongErr'} />
                        :
                        <Translate value="applicationForm.emailTitleRequired" />
                }
            </label>
            <input
                onChange={handleMandatoryInputChange}
                name="email"
                className={emailEmpty || emailWrong ? 'errFormInp' : 'formInp'}
                value={email}
                disabled={fethingPortfolio}
            />

            <label htmlFor="message"><Translate value="applicationForm.messageTitle" /></label>
            <textarea
                rows={textareaRows}
                onChange={handleInputChange}
                name="message"
                className="formTextarea formInp"
                value={message}
                disabled={fethingPortfolio}
            ></textarea>

            <label htmlFor="cvLink" className={(fileEmpty || fileMaxSize || (!file && fileLinkWrong)) ? 'errorLable' : ''}>
                <Translate value={cvLinkText} />
            </label>
            <div className={width <= 767 ? 'inputFileCont mobile' : 'inputFileCont'}>
                <input
                    onChange={handleMandatoryInputChange}
                    name="cvLink"
                    className={(fileEmpty || (!file && fileLinkWrong)) ? 'errFormInp myCvInput' : 'formInp myCvInput'}
                    value={file ? fileTitle : cvLink}
                    disabled={file || fethingPortfolio}
                />
                <input
                    type="file"
                    id="uploadCV"
                    className="inputCVFile"
                    onChange={handleInputUploadFile}
                    ref={downloadFileRef}
                    accept=".doc,.docx,.pdf"
                />
                <div className={file ? 'inputFileLabelCont' : ''}>
                    <label
                        style={{ cursor: 'pointer' }}
                        htmlFor="uploadCV"
                        className={`inputCVFileLable ${file && 'inputCVFileLableActive'}`}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        {
                            file ?
                                <img
                                    src={attachWhite}
                                    alt=""
                                /> :
                                <img src={hover ? attachBlueHover : attachBlue} alt="" />}
                    </label>
                    <div className="deleteFile" onClick={deleteFile}>
                        <img src={closeImgBlue} alt="" />
                    </div>
                </div>
            </div>
            <div style={{ display: 'inline-block', position: 'relative' }}>
                <Button
                    text={fethingPortfolio ? '' : 'applicationForm.sendBtm'}
                    onClick={fethingPortfolio ? null : sendMessage}
                    disabled={fethingPortfolio}
                    style={{ width: '100%', height: 55 }}
                />
            </div>
            {fethingPortfolio && <Loader className="cv-path" svgStyle={{ height: '50%' }} />}
        </div>
    );
};
const MapStateToProp = (state) => {
    return {
        fethingPortfolio: state.vacancies.fetchingSendingAplication
    };
};
export default connect(MapStateToProp, {
    sendApplicationPortfolioForm: vacanciesActions.sendApplication,
    getVacancies: vacanciesActions.getVacancies,
})(SendPortfolioForm);