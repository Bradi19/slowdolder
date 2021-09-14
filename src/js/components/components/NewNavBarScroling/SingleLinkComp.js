/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';


class SingleLinkComp extends PureComponent {
  static propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    // history: PropTypes.shape({
    //   push: PropTypes.func.isRequired,
    // }),
  };
  onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.history.push(this.props.path);
    window.scrollTo(0, 0);
  };

  languageForBlogHandler = (path, title) => {
    if (title === 'navbar.compLife' && this.props.activeLang === "ua") {
      return path + 'ua';
    }

      return path;
  };

  render() {
    const {
      isActive,
      redirect,
      path,
      title
    } = this.props;

    if (redirect) {
      return (
        <a href={this.languageForBlogHandler(path, title)}>
          <li className={isActive ? 'active' : ''} >
            <Translate value={this.props.title} />
          </li>
        </a>
      );
    }

    return (
      <li onClick={this.onClick} className={isActive ? 'active' : ''} >
        <Translate value={this.props.title} />
      </li>
    );
  }
}

export default withRouter(SingleLinkComp);
