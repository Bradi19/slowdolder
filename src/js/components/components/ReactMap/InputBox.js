import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Translate, I18n } from 'react-redux-i18n';
import planeImg from '../../../images/Shape.svg';
import marker from '../../../images/placeholder2.png';

const contStyle = {
  position: 'relative',
  height: '103px',
  width: '369px',
  opacity: 0.95,
  padding: '8px 16px 16px 16px',
  background: '#ffffff',
  bottom: 0,
  right: 0,
};

const inputStyle = {
  padding: '0 5px 0 22px',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  width: '290px',
  height: '32px',
  marginTop: '7px',
  borderRadius: '3px',
  fontSize: '14px',
  outline: 'none',
  textOverflow: 'ellipses',
};

class InputBox extends React.PureComponent {
  static propTypes = {
    onSend: PropTypes.func.isRequired,
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };
  render() {
    const { onSend, res: { width } } = this.props;
    // inputBox
    return (
      <div
        className={width <= 1279 ? 'inputBox mobile' : 'inputBox'}
        style={contStyle}
      >
        <h5><Translate value="contacts.buildDirection" /></h5>
        <img src={marker} className="inpMarker" alt="" />
        <input
          type="text"
          placeholder={I18n.t('contacts.buildDirection')}
          style={{
            ...inputStyle,
            width: width <= 1279 ? '85%' : '290px',
          }}
        />
        <div className="send" onClick={onSend}>
          <img src={planeImg} alt="" />
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    i18n: store.i18n,
    res: store.response,
  }),
  null,
)(InputBox);
