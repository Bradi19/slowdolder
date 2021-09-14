/* eslint-disable import/prefer-default-export,react/no-array-index-key,jsx-a11y/alt-text,max-len,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
// import rockets from '../../../images/aboutUs/rockets.svg';
import { history } from '../../config/contacts';
import RocketComponent from './rocketComponent';

@connect(
  store => ({ res: store.response }),
  null,
)
export class History extends Component {
  static propTypes = {
    res: PropTypes.shape({
      width: PropTypes.number,
    }),
  };
  prepareHistory = () => history.map((item, index, historyArr) => {
    let margitBotton = 'margin1';
    if (index < historyArr.length - 1 && item - historyArr[index + 1] > 1) {
      margitBotton = 'margin3';
    }

    if (item === 2017) {
      margitBotton = 'margin2017';
    } else if (item === 2018) {
      margitBotton = 'margin2018';
    } else if (item === 2019) {
      margitBotton = 'margin2019';
    } else if (item === 2020) {
      margitBotton = 'margin2020';
    }

    return (
      <div key={index} className={margitBotton}>
        <div className="yearCont" >{item}</div>
        <div className="dotCont" ><div /></div>
        <div className="texCont"><Translate value={`about.history${index}`} /></div>
      </div>);
  });


  render() {
    const historyItems = this.prepareHistory();
    const { width } = this.props.res;
    return (
      <div className={width <= 767 ? 'mainHistoryCont mobile' : 'mainHistoryCont'}>
        <div className={width <= 767 ? 'roketCont mobile' : 'roketCont'}>
          <RocketComponent className="rocketComponent" />
          {/* <img src={rockets} /> */}
        </div>
        <div className="HistoryContent">
          <div className="line" />
          { historyItems }
        </div>
      </div>
    );
  }
}
