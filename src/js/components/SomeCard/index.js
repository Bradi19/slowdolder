import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import img from '../../../images/squerImg.png';

class SomeCard extends Component {
  static propTypes = {
    imgUrl: PropTypes.string,
    style: PropTypes.instanceOf(Object),
    className: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    defStyle: PropTypes.shape({
      height: PropTypes.string,
      width: PropTypes.string,
    }),
  };

  static defaultProps = {
    style: {},
    imgUrl: img,
    title: '',
    className: '',
    defStyle: {
      height: '300px',
      width: '200px',
    },
    text: '',
  };

  setClassName = () => {
    let defClass = 'someCard';
    if (this.props.className) {
      defClass = `someCard ${this.props.className}`;
    }
    return defClass;
  };

  setStyles = () => {
    const { defStyle } = this.props;
    return { ...defStyle, ...this.props.style };
  };

  render() {
    const {
      imgUrl,
      title,
      text,
    } = this.props;
    return (
      <div
        className={this.setClassName()}
        style={this.setStyles()}
      >
        <div className="imgCont">
          <img src={imgUrl} alt="card" />
        </div>
        <h5><Translate value={title} /></h5>
        <p><Translate value={text} /></p>
      </div>
    );
  }
}

export default SomeCard;
