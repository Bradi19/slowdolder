import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';

export default class Jumbotron extends PureComponent {
  static propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    hasButton: PropTypes.bool,
    buttonText: PropTypes.string,
    style: PropTypes.shape({}),
  };
  static defaultProps = {
    header: '',
    text: '',
    hasButton: false,
    buttonText: '',
    style: {},
  };
  render() {
    const {
      header,
      text,
      hasButton,
      buttonText,
      style,
    } = this.props;
    return (
      <Container style={style}>
        <div style={{ maxWidth: '50%' }}>
          { header && <h2 style={{ textAlign: 'left' }}>{header.toUpperCase()}</h2> }
          { text && <p>{text}</p> }
          { hasButton && <button>{buttonText}</button> }
        </div>
      </Container>
    );
  }
}
