/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import '../../../scss/videoCard.scss';
import play from '../../../images/mainPage/play-button.svg';


@withRouter
export class VideoCard extends Component {
  static propTypes = {
    itemProps: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      publishedAt: PropTypes.string,
      id: PropTypes.string,
      youtubeHash: PropTypes.string,
    }),
    onShowPhoto: PropTypes.func.isRequired,
    onTurnVideo: PropTypes.func.isRequired,
  };
  static defaultProps = {
    itemProps: {
      thumbnail: '',
      title: '',
      publishedAt: '',
    },
  };

  onClickCard = () => {
    const { youtubeHash } = this.props.itemProps;
    if (youtubeHash) {
      this.props.onTurnVideo(youtubeHash);
    } else {
      this.props.onShowPhoto(this.props.itemProps);
    }
  };

  render() {
    const {
      thumbnail,
      title,
      publishedAt,
      youtubeHash,
    } = this.props.itemProps;

    return (
      <div className="videoCardCont" onClick={this.onClickCard} style={{ backgroundImage: `url(${thumbnail})` }}>
        <div className="backgroundHoverDiv">
          {youtubeHash && <img src={play} alt="" />}
          <div className="hoverCardVideoDiv">
            <p>{ moment(publishedAt).format('DD.MM.YYYY') }</p>
            <h4>{title}</h4>
          </div>
        </div>
      </div>
    );
  }
}
