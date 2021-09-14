/* eslint-disable import/prefer-default-export,react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import arrow from '../../../images/mainPage/arrow white.svg';
import arrowBlue from '../../../images/vacancies/arrow vacancy.svg';
import '../../../scss/localLinkBtn.scss';

@withRouter
export class LocalLinkBtn extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    whiteArrow: PropTypes.bool,
    className: PropTypes.string,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
  };
  static defaultProps = {
    whiteArrow: true,
  };

  redirect = () => {
    document.body.scrollTop = 0;
    this.props.history.push(this.props.linkTo);
  };

  render() {
    const {
      text,
      whiteArrow,
      className,
    } = this.props;


    return (
      <div className={`LocalLinkCont ${whiteArrow ? 'whiteArrow' : 'blueArrow'} ${className}`} onClick={this.redirect}>
        <Translate value={text} />
        {whiteArrow ? <img src={arrow} alt="" /> : <img src={arrowBlue} alt="" />}
      </div>
    );
  }
}
