/* eslint-disable react/forbid-prop-types,jsx-a11y/alt-text,jsx-a11y/iframe-has-title,react/require-default-props,max-len,no-unused-vars,react/prop-types */
import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import arrow from '../../../images/vacancies/arrow vacancy.svg';
// import play from '../../../images/mainPage/play-button.svg';
import cancel from '../../../images/aplicationForm/cancel blue.svg';
import './eventCardAdm.scss';
import { API_URL } from '../../../constants/index';

@withRouter
export default class EventCard extends PureComponent {
  static propTypes = {
    item: PropTypes.object,
    hoverEffect: PropTypes.bool,
    history: PropTypes.object,
    activeLang: PropTypes.string,
  };
  static defaultProps = {
    item: {
      id: '1',
      title: 'Record 1',
      description: 'Description of record 1',
      thumbnail: 'https://i.ytimg.com/vi/WTVKCvoPjpU/hqdefault.jpg',
      publishedAt: '2017-12-05T22:00:00.000Z',
    },
    hoverEffect: true,
    activeLang: 'RU',
  };

  redirect = (e) => {
    if (e.target.parentNode.getAttribute('class') !== 'deletEventBtn') {
      document.body.scrollTop = 0;
      this.props.history.push(`/events/${this.props.item.id}/edit`);
    }
  };

  render() {
    const {
      id,
      title,
      description,
      thumbnail,
      publishedAt,
      youtubeHash,
    } = this.props.item;
    const {
      hoverEffect,
      activeLang,
    } = this.props;
    // blog-card-trumbnail
    console.log(API_URL);
    return (
      <div className={`blog-card-cont-Adm ${hoverEffect ? 'hoverEffect' : ''}`} onClick={this.redirect}>
        <div
          className="blog-card-trumbnail"
          style={{ backgroundImage: `url(${API_URL}${thumbnail})` }}
        />
        <h4>{title[activeLang]}</h4>
        <p className="ellipse">
          {description[activeLang]}
        </p>
        <div className="blog-card-footer">
          <div className="blog-card-footer-data">
            <h5>{ moment(publishedAt).format('DD.MM.YYYY') }</h5>
          </div>
          <img src={arrow} />
        </div>
        <div className="deletEventBtn" onClick={() => this.props.onDelete(id)}><img src={cancel} alt="" /></div>
      </div>
    );
  }
}
