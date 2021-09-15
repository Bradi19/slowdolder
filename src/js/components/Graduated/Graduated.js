import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { Helmet } from 'react-helmet';
import { HELMET_ROUTE_MAP } from '../../constants';
import { people1, peopleImages1, people2, peopleImages2, people3, peopleImages3, people4, peopleImages4, people5, peopleImages5 } from '../../config/certificates';

import GraduatedTable from './GraduatesTable';

import './graduated.scss';

const Graduated = (props) => {

    const { locale } = props.i18n;

    const [isOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState();

    const handleOpenModal = async ({ man, images }) => {
        setIsOpen(!isOpen);
        return setImg(images[man]);
    };

    const setLink = (man, images) => {
        const link = images[man];
        return link;
    };

    return (
        <div className="container graduated">
            <Helmet>
                <title>{HELMET_ROUTE_MAP[locale].graduated}</title>
            </Helmet>
            <h3 className="text-center graduated-main-header"><Translate value="certificates.main_header" /></h3>
            <GraduatedTable
                people={people1}
                click={setLink}
                openModal={handleOpenModal}
                groupNumber={1}
                sertificateNumber={20190001}
                images={peopleImages1}
                course="ReactJS"
            />
            <GraduatedTable
                people={people2}
                click={setLink}
                openModal={handleOpenModal}
                groupNumber={2}
                sertificateNumber={20200001}
                images={peopleImages2}
                course="ReactJS"
            />
            <GraduatedTable
                people={people3}
                click={setLink}
                openModal={handleOpenModal}
                groupNumber={3}
                sertificateNumber={20200006}
                images={peopleImages3}
                course="ReactJS"
            />
            <GraduatedTable
                people={people4}
                click={setLink}
                openModal={handleOpenModal}
                groupNumber={4}
                sertificateNumber={20210001}
                images={peopleImages4}
                course="QA Manual"
            />
            <GraduatedTable
                people={people5}
                click={setLink}
                openModal={handleOpenModal}
                groupNumber={5}
                sertificateNumber={20210006}
                images={peopleImages5}
                course="QA Manual"
            />
            <Modal
                isOpen={isOpen}
                onRequestClose={handleOpenModal}
                contentLabel="Modal"
                className={{
                    base: 'modal-base',
                    afterOpen: 'modal-base_after-open',
                    beforeClose: 'modal-base_before-close'
                }}
                overlayClassName={{
                    base: 'overlay-base',
                    afterOpen: 'overlay-base_after-open',
                    beforeClose: 'overlay-base_before-close'
                }}
                shouldCloseOnOverlayClick={true}
                closeTimeoutMS={100}
                openTimeoutMS={10000}
                ariaHideApp={false}
            >
                <img src={img} alt="INTShop" className="img-fluid" id="graduated-secrtificate" />
                <i onClick={() => handleOpenModal('null')} className="far fa-times-circle certificate-close-btn"></i>
            </Modal>
        </div>
    );
};

export default connect((store) => ({ i18n: store.i18n }), null)(Graduated);
