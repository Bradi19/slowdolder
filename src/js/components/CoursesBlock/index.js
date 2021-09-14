import React from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import '../../../scss/coursesBlock.scss';
import { MaterialsReact, PlanOfCourseReact, Images, afterCourseBlockReact } from '../../config/courses';
import { MaterialsQa, NewPlanOfCourseQa, afterCourseBlockQa, FormatOfCourseQa } from '../../config/qaengine';
import { afterCourseBlockSelenium, MaterialsSelenium } from '../../config/selenium';
import { afterCourseBlockBase, PlanOfBaseCourse } from '../../config/baseCourse';

import CoursesSlider from '../CoursesSlider';

export default class CoursesBlock extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
  };

  showItems = (item, isLeft = true) => {
    const arr = Object.entries(item);
    const filteredArray = arr.filter((el => el[0].includes(`element_${isLeft ? 'l' : 'r'}`)));
    return (
      filteredArray.map(element => <div key={element[1]} className="lesson_for_plan"><Translate value={element[1]} /></div>)
    );
  }
  blockAfterBaseCourse = (afterCourseBlock, coursesClass) => {
    return (
      <div className="section">
        <h1 className="course_header"><Translate value={`${coursesClass}.afterCourse.main_header`} /></h1>
        {coursesClass === "selenium" && <div className="afterCourse_mainDescription"><Translate value={`${coursesClass}.afterCourse.main_description`} /></div>}
        <div className={`after_course_block ${coursesClass}`}>
          {afterCourseBlock().map(item => (
            <div key={item.header} className={`after_course_text ${coursesClass}`}>
              <img src={item.img} alt={`Course: ${coursesClass}`} />
              <div className={`after_course_wrapper ${coursesClass}`}>
                <div className={`after_course_header ${coursesClass}`}><Translate value={item.header} /></div>
                {item.text && <div className={`after_course_description ${coursesClass}`}><Translate value={item.text} /></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  blockAfterCourse = (afterCourseBlock, coursesClass) => {
    return (
      <div className="section">
        <h1 className="course_header"><Translate value={`${coursesClass}.afterCourse.main_header`} /></h1>
        {coursesClass === "selenium" && <div className="afterCourse_mainDescription"><Translate value={`${coursesClass}.afterCourse.main_description`} /></div>}
        <div className={`after_course_block ${coursesClass}`}>
          {afterCourseBlock().map(item => (
            <div key={item.header} className={`after_course_text ${coursesClass}`}>
              <img src={item.img} alt={`Course: ${coursesClass}`} />
              <div className={`after_course_wrapper ${coursesClass}`}>
                <div className={`after_course_header ${coursesClass}`}><Translate value={item.header} /></div>
                {item.text && <div className={`after_course_description ${coursesClass}`}><Translate value={item.text} /></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  blockFormatCourse = (FormatOfCourse, courseClass) => {
    return (
      <div>
        <h1 className="course_header"><Translate value="qaengine.format.main_header" /></h1>
        <div className="format_course_block">
          {FormatOfCourse.map(item => (
            <div key={item.key} className="format_container">
              <img src={item.img} alt={`Course: ${courseClass}`} />
              <div className="format_course_wrapper">
                <div className="format_course_header"><Translate value={item.header} /></div>
                <div className="format_course_description"><Translate value={item.text} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  blockMaterials = (Materials, courseClass) => {
    if (Materials === "") {
      return;
    }
    return (
      <div className="">
        <h1 className="course_header"><Translate value={`${courseClass}.course_header_1`} /></h1>
        <div className={`materials ${courseClass}`}>
          {
            Materials.map(item => (
              <div key={item} className={`material_block ${courseClass}`}>
                  <img src={item} alt={`Materials for ${courseClass}`} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }

  blockNewProgrammOfCOurse = (PlanOfCourse) => {
    return (
      <div>
        <h1 className="course_header">
          <Translate value="courses.course_header_2" />
        </h1>
        <div className="plan_of_course">
          {PlanOfCourse.map((item) => {
            return (
              <div className="plan_block" key={item.key}>
                <img src={Images.milestone} className="milestone_icon" alt="Mileston for new program" />
                {!item.endLine && <div className={`plan_line ${item.smallText && 'small_text'}`} />}
                <div className="plan_wrapper">
                  {item.blockNumber && <div className="block"><Translate value="qaengine.newProgram.block" /> {item.blockNumber}</div>}
                  {item.bonus && <div className="plan_bonus"><Translate value={item.bonus} /> </div>}
                  <div className="plan_header"><Translate value={item.header} /></div>
                  <div className="plan_text">{item.text && <Translate value={item.text} />}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  blockProgrammOfBaseCourse = (PlanOfCourse) => {
    return (
      <div>
        <h1 className="course_header"><Translate value="courses.course_header_2" /></h1>
        <div className="course_plan">
          {
            PlanOfCourse.map((item) => (
              <div key={item.header_1}>
                <div className="plan_container qa forBaseCourse">
                  <div className="week_container">
                    <p className="week header_for_plan">
                      <Translate value={item.header_1} />
                    </p>
                  </div>
                  {
                    Object.entries(item).filter((el => el[0].includes(`lesson_`))).map((lessons, k) => {
                      const classForOne = (+/\d+/.exec(Object.keys(item).sort().reverse()[0]) === (k + 1)) ? 'plan_container_left plan_container_left_one' : 'plan_container_left';
                      return (

                        <div
                          key={lessons[0]}
                          className={
                            ((k + 1) % 2 === 0)
                              ? "plan_container_right"
                              : classForOne
                          }
                        >
                          <div className={item.lesson_2 ? '' : 'leftSize'}>
                            <div key={lessons[1]} className="plan_lesson baseCourse">
                              <Translate value={lessons[1].title} />
                            </div>
                            <div className="plan_container_content">
                              {
                                Object.entries(lessons[1].elements).map((elem) => <div key={elem[1]} className="lesson_for_plan"><Translate value={elem[1]} /></div>)
                              }
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  blockProgrammOfCourse = (PlanOfCourse) => {
    return (
      <div>
        <h1 className="course_header"><Translate value="courses.course_header_2" /></h1>
        <div className="course_plan">
          {
            PlanOfCourse.map((item, i) => (
              <div key={item.header_1}>
                <div className="plan_container qa">
                  <div className="week_container">
                    <p className="week">
                      <Translate value="courses.week" />
                      <span>{i + 1}</span>
                    </p>
                  </div>
                  <div
                    className={
                      item.header_2
                        ? "plan_container_left"
                        : "plan_container_left plan_container_left_one"
                    }
                  >
                    <div>
                      <div className="plan_lesson">
                        <Translate value={item.lesson_1} />
                      </div>
                      <div className="header_for_plan">
                        <Translate value={item.header_1} />
                      </div>
                      <div className="plan_container_content">
                        {this.showItems(item, true)}
                      </div>
                    </div>
                  </div>
                  {item.lesson_2 && item.header_2 && (
                    <div className="plan_container_right">
                      <div>
                        <div className="plan_lesson">
                          <Translate value={item.lesson_2} />
                        </div>
                        <div className="header_for_plan">
                          <Translate value={item.header_2} />
                        </div>
                        <div className="plan_container_content">
                          {this.showItems(item, false)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  changeImages = (courseClass) => {
    if (courseClass === 'baseCourse') {
      return Images.baseCourseSmall;
    }
    return Images.rightBrace;
  }
  render() {
    const { width, courseClass } = this.props;
    let afterCourseBlock;
    let Materials;
    let PlanOfCourse;
    let FormatOfCourse;
    switch (courseClass) {
      case "qaengine":
        afterCourseBlock = afterCourseBlockQa;
        Materials = MaterialsQa;
        PlanOfCourse = NewPlanOfCourseQa;
        FormatOfCourse = FormatOfCourseQa;
        break;
      case "baseCourse":
        afterCourseBlock = afterCourseBlockBase;
        Materials = "";
        PlanOfCourse = PlanOfBaseCourse;
        break;
      case "react":
        afterCourseBlock = afterCourseBlockReact;
        Materials = MaterialsReact;
        PlanOfCourse = PlanOfCourseReact;
        break;
      case "selenium":
        afterCourseBlock = afterCourseBlockSelenium;
        Materials = MaterialsSelenium;
        FormatOfCourse = FormatOfCourseQa;
        break;
      default:
        return null;
    }
    return (
      <div className="course_block">
        <h1 className="course_header"><Translate value={`${courseClass}.courseDescription.header`} /></h1>
        <div className="description_of_course">
          <div className="discription_of_course_left">
            <img src={width <= 700 ? Images.leftBraceSmall : Images.leftBrace} alt="react courses" className={`${courseClass}_img`} />
            <Translate value={`${courseClass}.courseDescription.left`} />
            <div className="blank-one"></div>
          </div>
          <div className="discription_of_course_right">
            <div className="blank-two"></div>
            <Translate value={`${courseClass}.courseDescription.right`} />
            <img src={width <= 700 ? Images.rightBraceSmall : this.changeImages(courseClass)} alt="react courses" className={`${courseClass}_img`} />
          </div>
        </div>
        {this.blockAfterBaseCourse(afterCourseBlock, courseClass)}
        {this.blockMaterials(Materials, courseClass)}
        {FormatOfCourse && this.blockFormatCourse(FormatOfCourse, courseClass)}
        {courseClass === "qaengine" && this.blockNewProgrammOfCOurse(PlanOfCourse)}
        {courseClass === "react" && this.blockProgrammOfCourse(PlanOfCourse, courseClass)}
        {courseClass === "baseCourse" && this.blockProgrammOfBaseCourse(PlanOfCourse, courseClass)}
        <h1 className="course_header"><Translate value="courses.course_header_3" /></h1>
        <div className="about_us">
          <div className="about_us_main_img"><img src={width >= 480 ? Images.photo768 : Images.photo375} alt="INTShop team" /></div>
          <div className="about_us_description">
            <div className="about_us_text">
              <Translate value="courses.INTShop" />
            </div>
            <div className="about_us_images">
              <a href="https://www.instagram.com/INTShop/"><img src={Images.instagram} alt="Instagram" /></a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFQtblt-25pRwAAAWxxpHT4PCRKyj3v-RLw5pykpvXv4HeM9jlgWM21Tz6ZkOOvDJVlna_yJvD9OjYQ5xPLA8OlohOdhECzR7O8_GxoRQm_lxvToClugJlzytOWYTUFk-8LPcg=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F3552182"><img src={Images.linkedin} alt="Linkedin" /></a>
              <a href="https://www.facebook.com/INTShop.ltd"><img src={Images.facebook} alt="Facebook" /></a>
            </div>
          </div>
        </div>
        <h1 className="course_header"><Translate value="courses.course_header_4" /></h1>
        <CoursesSlider />
        <h1 className="course_header"><Translate value="courses.course_header_5" /></h1>
      </div>
    );
  }
}
