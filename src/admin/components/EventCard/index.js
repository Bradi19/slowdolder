/* eslint-disable import/prefer-default-export,react/prefer-stateless-function,react/forbid-prop-types,max-len,react/require-default-props,jsx-a11y/anchor-is-valid,react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../constants/index';
import './eventCard.scss';
import img1 from '../../../images/200x200.png';

@withRouter
export class EventCard extends Component {
    static defaultProps = {
      itemProps: {
        img: img1,
        title: {
          ru: 'New event',
          ua: 'New event',
          en: 'New event',
        },
        description: {
          ru: 'New event description',
          ua: 'New event description',
          en: 'New event description',
        },
      },
      activeLang: 'ru',
    };

    redirect = path => () => {
      window.scrollTo(0, 0);
      this.props.history.push(path);
    };

    render() {
      const {
        id,
        title,
        description,
        thumbnail,
      } = this.props.itemProps;
      const { activeLang, deleteEvent } = this.props;
      return (
        <div className="vacanceCardCont">
          <div className="vacanceCardHeader">
            <div className="titleContainer">{title[activeLang]}</div>
            <div className="ButtonContainer">
              <button
                onClick={this.redirect(`/events/${id}/edit`)}
              >Edit
              </button>
              <button
                onClick={deleteEvent}
              >Delete
              </button>
            </div>
          </div>
          <div className="bodyCardCont">
            <div className="imgCard" style={{ backgroundImage: `url(${API_URL}${thumbnail})` }} />
            <div className="vacanceCardTitle" >
              {description[activeLang]}
            </div>
          </div>
        </div>
      );
    }
}
