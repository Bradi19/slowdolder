/* eslint-disable import/prefer-default-export,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import '../../../scss/vacanceCard.scss';
import arrow from '../../../images/vacancies/arrow vacancy.svg';

@withRouter
export class VacanceCard extends Component {
  static propTypes = {
    itemProps: PropTypes.shape({
      level: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      publishedAt: PropTypes.string,
      id: PropTypes.string,
    }),
    footerStyle: PropTypes.shape(),
    hoverEffect: PropTypes.bool,
    // history: PropTypes.shape({
    //   push: PropTypes.func,
    // }),
  };
  static defaultProps = {
    itemProps: {
      level: 'Junior',
      title: 'Frontend',
      description: 'We are looking for an experienced and responsible engineer',
      id: '',
      publishedAt: '1.01.2017',
    },
    footerStyle: {},
    hoverEffect: true,
  };

  onCardClick = () => {
    document.body.parentNode.scrollTop = 0;
    const vacancieUrlName = this.props.itemProps.title.trim().replace(/–|[.]|,|[/]|\s+/g, "-").replace(/-+/g, "-")
      .toLowerCase();
    // window.open(`/vacancies/${vacancieUrlName}`);
    this.props.history.push(`/vacancies/${vacancieUrlName}`);
  };

  render() {
    const {
      level,
      title,
      description,
      publishedAt,
    } = this.props.itemProps;
    const {
      footerStyle,
      hoverEffect,
    } = this.props;
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
        bgColor = '#000';
    }
    return (
      <div className={`vacanceCardCont ${hoverEffect ? 'hoverClass' : ''}`} onClick={this.onCardClick}>
        <div>
          <div className="vacanceCardHead" style={{ backgroundColor: bgColor }}>
            {level}
          </div>
        </div>
        <div className="vacanceCardLongTitle">{title}</div>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="vacanceCardLongDescr" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="vacanceCardFooter" style={footerStyle}>
          <div>{moment(publishedAt).format('DD.MM.YYYY')}</div>
          <div><img src={arrow} alt="" /></div>
        </div>
      </div>
    );
  }
}
