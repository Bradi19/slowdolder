/* eslint-disable react/forbid-prop-types,jsx-a11y/anchor-is-valid,react/prop-types,import/prefer-default-export,max-len,jsx-a11y/alt-text */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import './videoCardAdm.scss';
import play from '../../../images/mainPage/play-button.svg';
import cancel from '../../../images/aplicationForm/cancel white.svg';


@withRouter
export class VideoCard extends Component {
  static defaultProps = {
    itemProps: {
      thumbnail: '',
      title: '',
      publishedAt: '',
    },
  };

  onClickCard = (e) => {
    if (e.target.parentNode.getAttribute('class') !== 'hoverCancelBtn') {
      const { youtubeHash } = this.props.itemProps;
      this.props.onTurnVideo(youtubeHash);
    }
  };

  onDelete = () => {
    const { youtubeHash } = this.props.itemProps;
    this.props.onDelete(youtubeHash);
  };

  render() {
    const {
      thumbnail,
      title,
      publishedAt,
    } = this.props.itemProps;
    return (
      <div className="videoCardContAdm" onClick={this.onClickCard} style={{ backgroundImage: `url(${thumbnail})` }}>
        <div className="backgroundHoverDiv">
          <div className="hoverCancelBtn" onClick={this.onDelete}><img src={cancel} alt="" /></div>
          <img src={play} alt="" />
          <div className="hoverCardVideoDiv">
            <p>{ moment(publishedAt).format('DD.MM.YYYY') }</p>
            <h4>{title}</h4>
          </div>
        </div>
      </div>
    );
  }
}
