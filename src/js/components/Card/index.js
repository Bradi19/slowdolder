import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

import '../../../scss/card.scss';

export default class Card extends PureComponent {
  static propTypes = {
    thumbnail: PropTypes.string,
    header: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    onPress: PropTypes.func,
  };
  static defaultProps = {
    thumbnail: 'url(http://via.placeholder.com/350x250)',
    header: '',
    text: '',
    date: '',
    onPress: arg => arg,
  };
  constructor() {
    super();

    this.state = { isVisible: false };
  }
  onMouseLeave = () => this.setState({ isVisible: false });
  onMouseEnter= () => this.setState({ isVisible: true });
  render() {
    const {
      thumbnail,
      header,
      text,
      date,
      onPress,
    } = this.props;
    return (
      <div
        className="card"
        style={{ backgroundImage: thumbnail }}
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
      >
        { this.state.isVisible && <div>{header}</div> }
        { this.state.isVisible && <div>{text}</div> }
        { this.state.isVisible && <button onClick={onPress}><Translate value="common.more" /></button> }
        { this.state.isVisible && <div>{date}</div> }
      </div>
    );
  }
}
