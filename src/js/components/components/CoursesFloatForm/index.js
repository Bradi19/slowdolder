import React from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import CourseForm from '../CoursesForm';

import cross from '../../../images/courses/crossForm.svg';

export default class CourseFloatForm extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    hanleClick: PropTypes.func.isRequired,
    didCompleted: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  };

  render() {
    const {
      isOpen,
      hanleClick,
      isCompleted,
      didCompleted,
      courseClass,
      courseClassName
    } = this.props;
    return (
      <div>
        <div id="float_form" style={{ display: isOpen ? 'initial' : 'none' }}>
          <img src={cross} onClick={hanleClick} className="float_form_cross" alt="cross form" />
          <div className={isCompleted ? 'form_completed' : 'float_form_header'}><Translate value="courses.form.header" /></div>
          <CourseForm
            didCompleted={didCompleted}
            isCompleted={isCompleted}
            hanleClick={hanleClick}
            courseClass={courseClass}
            courseClassName={courseClassName}

          />
          {/* <a onClick={hanleClick} className={isCompleted ? 'form_completed' : 'float_form_close_btn'}><Translate value="courses.form.close_btn" /></a> */}
        </div>
      </div>
    );
  }
}
