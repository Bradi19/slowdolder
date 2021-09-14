/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import arrow from '../../../images/vacancies/arrow vacancy.svg';
import play from '../../../images/mainPage/play-button.svg';
import '../../../scss/blogCard.scss';
import { API_URL } from '../../../constants/index';

import { truncString } from '../../utils';

@withRouter
@connect(
  store => ({ res: store.response }),
  null,
)
export default class BlogCard extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnail: PropTypes.string,
      publishedAt: PropTypes.string,
      youtubeHash: PropTypes.string,
    }),
    res: PropTypes.shape({
      width: PropTypes.number,
    }),
    onTurnOnVideo: PropTypes.func.isRequired,
    hoverEffect: PropTypes.bool,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
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
  };

  turnOnVideo = () => {
    const { youtubeHash } = this.props.item;
    if (youtubeHash) {
      this.props.onTurnOnVideo(youtubeHash);
    } else {
      document.body.scrollTop = 0;
      this.props.history.push(`/company/events/${this.props.item.id}`);
    }
  };

  eventBackground = () => {
    const { id, thumbnail } = this.props.item;
    if (id === '5b3f87a9db606d0012f4884a' || id === '5b3f6cb072c32400122f1680') {
      return API_URL + '/uploads/events/blog1.jpg';
    } else if (id === '5a71897125c3cd7d5c83533e' || id === '5a9e97a1094f750012201323') {
      return API_URL + '/uploads/events/blog2.jpg';
    }
    return thumbnail;
  }


  render() {
    const {
      title,
      description,
      publishedAt,
      youtubeHash,
    } = this.props.item;
    const {
      hoverEffect,
      res: { width },
    } = this.props;

    return (
      <div className={`blog-card-cont ${hoverEffect ? 'hoverEffect' : ''}`} onClick={this.turnOnVideo} >
        <div
          className={width <= 767 ? 'blog-card-trumbnail mobile' : 'blog-card-trumbnail'}
          style={{ backgroundImage: `url(${this.eventBackground()})` }}
        >
          {youtubeHash && <div className="blog-card-trumbnail-hover" ><img src={play} alt="" /></div>}
        </div>
        <h4>
          {
            truncString({
              str: title,
              length: 25,
              ending: '...',
            })
          }
        </h4>
        <p>
          {
            truncString({
              str: description,
              length: 100,
              ending: '...',
            })
          }
        </p>
        <div className="blog-card-footer">
          <div className="blog-card-footer-data">
            <h5>{ moment(publishedAt).format('DD.MM.YYYY') }</h5>
            {youtubeHash && <div className="videoTag">Video</div>}
          </div>
          {!youtubeHash && <img src={arrow} alt="" />}
        </div>
      </div>
    );
  }
}
