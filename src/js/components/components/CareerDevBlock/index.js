import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

import imageSrcRu from '../../../images/career/career development rus.png';
import imageSrcUa from '../../../images/career/career development ukr.png';
import mobImageRu from '../../../images/career/сareerdevelopmetmob.png';
import mobImageUa from '../../../images/career/careerdevelopmentukr.png';

import '../../../scss/career.scss';

export default class CareerDevBlock extends PureComponent {
  static propTypes = {
    lang: PropTypes.string,
    width: PropTypes.number.isRequired,
  };

  static defaultProps = {
    lang: 'ru',
  };

  render() {
    const { lang, width } = this.props;
    let imageSrc;
    const isMobile = (width <= 767);

    switch (lang) {
      case 'ru':
        imageSrc = isMobile ? mobImageRu : imageSrcRu;
        break;
      case 'ua':
        imageSrc = isMobile ? mobImageUa : imageSrcUa;
        break;
      default:
        imageSrc = isMobile ? mobImageRu : imageSrcRu;
    }

    return (
      <div className={width <= 767 ? 'career_dev_container mobile' : 'career_dev_container'}>
        <h3><Translate value="career.development.header" /></h3>

        <img src={imageSrc} alt="some alt" />
      </div>
    );
  }
}
