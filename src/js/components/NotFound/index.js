import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
// import Robot from '../../../images/robot.svg';

// import '../../../scss/notFound.scss';

@withRouter
class NotFound extends PureComponent {
  render() {
    return (
      <div className="notfoundeContainer">
        <div className="imgContainer">
          {/* <img src= alt="" /> */}
          <div className="error">404</div>
        </div>
        <div className="errorMasage"><Translate value="notFound.message" /></div>
        <Link to="/" ><Translate value="notFound.linkText" /></Link>
      </div>
    );
  }
}

export default NotFound;
