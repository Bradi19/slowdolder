import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import HeaderSection from '../../components/HeaderSection/index';
import CoursesHeader from '../../components/CoursesHeader';
import CoursesBlock from '../../components/CoursesBlock';
import CoursesFooterForm from '../../components/CoursesFooterForm';
import CoursesSocial from '../CoursesSocial';
import '../../../scss/career.scss';

import backgroundImageReact from '../../../images/courses/education.jpg';
import backgroundImageQa from '../../../images/qaengine/qa_bg2.png';
import backgroundImageBaseCourse from '../../../images/baseCourse/blueHeadFon.jpg';

import '../../../scss/coursesHeader.scss';
import contactActions from '../../actions/contactActions';


class CoursesBody extends React.PureComponent {

  static propTypes = {
    courseClass: PropTypes.string.isRequired,
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };

  state = {
    isOpen: false,
    isCompleted: false,
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  didCompleted = () => {
    this.setState({ isCompleted: !this.state.isCompleted });
  }

  hanleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
    document.getElementById('float_form').style.display = 'none';
    document.getElementById('grey').style.display = 'none';
  }

  showForm = () => {
    this.setState({ isOpen: !this.state.isOpen });
    document.getElementById('float_form').style.display = 'initial';
    document.getElementById('grey').style.display = 'initial';
  }

  changeIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }


  render() {
    const {
      res: { width },
      courseClass
    } = this.props;

    let backgroundImage;
    let courseClassName;

    switch (courseClass) {
      case "qaengine":
        backgroundImage = backgroundImageQa;
        courseClassName = "Курсы Тестировщика";
        break;
      case "baseCourse": {
        backgroundImage =backgroundImageBaseCourse;
        courseClassName = "Базовый курс программирования";
        break;
      }
      case "react":
        backgroundImage = backgroundImageReact;
        courseClassName = "Курсы ReactJS";

        break;
      case "selenium":
        backgroundImage = backgroundImageReact;
        courseClassName = "Курсы автоматизации тестирования";

        break;
      default:
        return null;
    }
    return (
      <React.Fragment>
        <HeaderSection
          title="courses.header"
          backgroundImage={backgroundImage}
        />
        <CoursesSocial width={width} />
        <div className="wrapper">
          <CoursesHeader
            courseClass={courseClass}
            width={width}
            hanleClick={this.hanleClick}
            isOpen={this.state.isOpen}
            showForm={this.showForm}
            didCompleted={this.didCompleted}
            courseClassName={courseClassName}
            isCompleted={this.state.isCompleted}
          />
        </div>
        <CoursesBlock courseClass={courseClass} lang={this.props.activeLang} width={width} />
        <CoursesFooterForm
          didCompleted={this.didCompleted}
          isCompleted={this.state.isCompleted}
          hanleClick={this.hanleClick}
          changeIsOpen={this.changeIsOpen}
          courseClass={courseClass}
          courseClassName={courseClassName}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  store => ({
    res: store.response,
  }),
  dispatch => bindActionCreators({ ...contactActions }, dispatch),
)(CoursesBody);