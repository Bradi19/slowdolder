/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Lang extends PureComponent {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    changeLang: PropTypes.func.isRequired,
    activeLang: PropTypes.string.isRequired,
  };
  onClick = () => this.props.changeLang(this.props.lang);
  render() {
    const { lang } = this.props;
    const isActive = this.props.activeLang === this.props.lang ? 'active' : '';
    return (
      <div className={`lang ${lang} ${isActive}`} onClick={this.onClick} >
        {lang}
      </div>
    );
  }
}

