import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

import '../../../scss/pageHeaderSection.scss';

export default class HeaderSection extends PureComponent {
  static propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.arrayOf(PropTypes.element),
    ]),
    level: PropTypes.string,
    titleNoTranslate: PropTypes.bool,
  };
  static defaultProps = {
    className: '',
    title: '',
    children: <span />,
    level: '',
    titleNoTranslate: false,
  };
  render() {
    const {
      backgroundImage,
      title,
      className,
      children,
      level,
      titleNoTranslate,
    } = this.props;
    let bgColor = null;
    switch (level) {
      case 'Trainee':
        bgColor = '#B35CE0';
        break;
      case 'Junior':
        bgColor = '#09C540';
        break;
      case 'Middle':
        bgColor = '#FE6D0E';
        break;
      case 'Senior':
        bgColor = '#005CCC';
        break;
      default:
        bgColor = '#000';
    }
    return (
      <div
        className={`headerSection ${className}`}
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
          maxWidth: "1920px",
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            minHeight: "388px",
            maxHeight: "580px",
            objectFit: "cover",
          }}
        />
        <div
          className="headerSectionInnerCont"
          style={{
            position: "absolute",
            display: "flex",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            backgroundColor: "transparent",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {level && bgColor && (
            <div
              style={{
                backgroundColor: bgColor,
                width: "100px",
                color: "white",
                fontSize: "1.08rem",
                borderRadius: "5%",
                textAlign: "center",
                lineHeight: "1.65rem",
                marginBottom: "8px",
              }}
            >
              {level}
            </div>
          )}
          {title && (
            <h2
              style={{
                color: "#fff",
                fontSize: "3.6rem",
                // fontWeight: '500',
                // marginTop: "60px",
                lineHeight: "55px",
                textAlign: "left",
                fontFamily: "Avenir-Bold,sans-serif",
              }}
            >
              {titleNoTranslate ? title : <Translate value={title} />}
            </h2>
          )}
          <div className="component">{children}</div>
        </div>
      </div>
    );
  }
}
