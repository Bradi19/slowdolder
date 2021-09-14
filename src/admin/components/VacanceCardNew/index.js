/* eslint-disable react/forbid-prop-types,jsx-a11y/anchor-is-valid,react/prop-types,import/prefer-default-export,max-len,jsx-a11y/alt-text,react/no-danger */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import cancel from '../../../images/aplicationForm/cancel blue.svg';
import './vacanceCardNew.scss';
import arrow from '../../../images/vacancies/arrow vacancy.svg';


@withRouter
export class VacanceCard extends Component {
  static defaultProps = {
    itemProps: {
      level: 'Junior',
      title: 'Frontend',
      id: '',
      publishedAt: '1.01.2017',
    },
    hoverEffect: true,
    showDeletBtn: false,
    // description: 'We are looking for an experienced and responsible engineer We are looking for an experienced and responsible engineer We are looking for an experienced and responsible engineer We are looking for an experienced and responsible engineer We are looking for an experienced and responsible engineer We are looking for an experienced and responsible engineer',
  };

  onCardClick = (e) => {
    if (e.target.parentNode.getAttribute('class') !== 'deleteVacanceBtn') {
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  };

  render() {
    const {
      id,
      level,
      title,
      publishedAt,
      description,
    } = this.props.itemProps;
    const { activeLang, hoverEffect, showDeletBtn } = this.props;
    let bgColor = null;
    switch (level) {
      case 'Trainee':
        bgColor = '#B35CE0';
        break;
      case 'Junior':
        bgColor = '#09C540';
        break;
      case 'Middle':
        bgColor = '#FE6D0E';
        break;
      case 'Senior':
        bgColor = '#005CCC';
        break;
      default:
        bgColor = '#000000';
    }
    return (
      <div className={`vacanceCardContAdm ${hoverEffect ? 'hoverClass' : ''}`} onClick={this.onCardClick}>
        <div>
          <div className="vacanceCardHead" style={{ backgroundColor: bgColor }}>
            {level}
          </div>
        </div>
        <div className="vacanceCardLongTitle">{(typeof title === 'string') ? title : title[activeLang]}</div>
        {description ? <div className="vacanceCardLongDescrAdm" dangerouslySetInnerHTML={{ __html: description[activeLang] }} /> : this.props.children}
        <div className="vacanceCardFooter">
          <div>{moment(publishedAt).format('DD.MM.YYYY')}</div>
          <div><img src={arrow} /></div>
        </div>
        {showDeletBtn && <div className="deleteVacanceBtn" onClick={() => this.props.onDelete(id)}><img src={cancel} alt="" /></div>}
      </div>
    );
  }
}
