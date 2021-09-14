/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

export default class AboutUsItem extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      linkText: PropTypes.string,
      title: PropTypes.string,
      imgUrl: PropTypes.string,
      linkText11: PropTypes.string,
    }).isRequired,
    mainClass: PropTypes.string,
    bodyClass: PropTypes.string,
    titleClass: PropTypes.string,
    textClass: PropTypes.string,
    imgClass: PropTypes.string,
  };
  static defaultProps = {
    mainClass: 'about-item',
    bodyClass: 'about-body',
    titleClass: 'about-title',
    textClass: 'about-text',
    imgClass: 'aboutIMG',
  };

  render() {
    const {
      title,
      linkText,
      imgUrl,
      linkText11,
    } = this.props.item;
    const {
      mainClass,
      bodyClass,
      titleClass,
      textClass,
      imgClass,
    } = this.props;
    return (
      <div className={mainClass}>
        <div className={imgClass}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={bodyClass}>
          <div className={titleClass}>
            <Translate value={title} />
          </div>
          <div className={textClass}>
            {
              linkText11 && mainClass !== 'main-about-item' ?
                (
                  <div>
                    <Translate value={linkText} />
                    <Translate
                      value={linkText11}
                    />
                  </div>
                ) :
                (
                  linkText11 && mainClass === 'main-about-item' ?
                  (
                    <div>
                      <div>
                        <Translate value={linkText} />
                      </div>
                      <Translate
                        value={linkText11}
                      />
                    </div>
                  ) :

                  (<Translate value={linkText} />)
                )
            }
          </div>
        </div>
      </div>);
  }
}
