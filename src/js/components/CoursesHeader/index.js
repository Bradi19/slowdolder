import React from 'react';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CourseFloatForm from '../CoursesFloatForm';
import { BlockForCoursesReact, BlockReact, Images } from '../../config/courses';
import { BlockForCoursesBase, BlockBaseCourse } from '../../config/baseCourse';
import { BlockForCoursesQa, BlockQa } from '../../config/qaengine';
import { BlockForCoursesSelenium, BlockSelenium } from '../../config/selenium';
import '../../../scss/coursesHeader.scss';

class CoursesHeader extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    hanleClick: PropTypes.func.isRequired,
    showForm: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    didCompleted: PropTypes.func.isRequired,
  };

  newWindow = (addr) => {
    window.open(addr, 'MyWin', 'menubar=yes,width=1024,height=768');
  }

  choiseIcon = (BlockForCourses, courseClass) => {
    switch (courseClass) {
      case "qaengine":
        return (
          <div className="img">
            <div className="img-overlay">
              <img
                className={courseClass}
                src={BlockForCourses.icon}
                alt="Курсы QA"
              />
              <img
                className="qaengine-juk"
                src={BlockForCourses.juk}
                alt="Курсы QA"
              />
            </div>
          </div>
        );
      case "baseCourse":
        return (
          <div className="img">
            <img
              className={courseClass}
              src={BlockForCourses.icon}
              alt="Начальные курсы"
            />
          </div>
        );
      case "react":
        return (
          <div className="img">
            <img
              className={courseClass}
              src={BlockForCourses.icon}
              alt="Курсы ReactJS"
            />
          </div>
        );
      case "selenium":
        return (
          <div className="img">
            <img
              className={courseClass}
              src={BlockForCourses.icon}
              alt="Курсы Selenium IDE"
            />
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const { width, courseClass } = this.props;

    let BlockForCourses;
    let Block;
    switch (courseClass) {
      case "qaengine":
        BlockForCourses = BlockForCoursesQa;
        Block = BlockQa;
        break;
      case "baseCourse":
        BlockForCourses = BlockForCoursesBase;
        Block = BlockBaseCourse;
        break;
      case "react":
        BlockForCourses = BlockForCoursesReact;
        Block = BlockReact;
        break;
      case "selenium":
        BlockForCourses = BlockForCoursesSelenium;
        Block = BlockSelenium;
        break;
      default:
        return null;
    }
    const linktoFacebook = <div data-href="https://INTShop.com.ua/courses"><a href="" onClick={() => this.newWindow('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%INTShop.ua%2Fcourses&amp;src=sdkpreparse')}><img className="icon_img" src={Images.facebook} alt="INTShop facebook" /></a></div>;
    const linktoFacebookPhone = <div data-href="https://INTShop.com.ua/courses"><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%INTShop.ua%2Fcourses&amp;src=sdkpreparse"><img className="icon_img" src={Images.facebook} alt="INTShop facebook" /></a></div>;
    const lintToLinkedIn = <a href="" onClick={() => this.newWindow('https://www.linkedin.com/shareArticle?mini=true&url=https://INTShop.com.ua/courses&title=React courses&summary=My%20favorite%20developer%20program&source=LinkedIn')}><img className="icon_img" src={Images.linkedin} alt="INTShop linkedin" /></a>;
    const lintToLinkedInPhone = <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://INTShop.ua/courses&title=React courses&summary=My%20favorite%20developer%20program&source=LinkedIn"><img className="icon_img" src={Images.linkedin} alt="INTShop linkedin" /></a>;
    return (
      <div className="my_container">
        <div id="grey">`</div>
        <CourseFloatForm
          isOpen={this.props.isOpen}
          hanleClick={this.props.hanleClick}
          didCompleted={this.props.didCompleted}
          isCompleted={this.props.isCompleted}
          courseClass={courseClass}
          courseClassName={this.props.courseClassName}
        />
        {this.choiseIcon(BlockForCourses, courseClass)}
        <div className={`description_block ${courseClass}`}>
          <h1 className={`${courseClass}`}><Translate value={`${courseClass}.introduction.header`} /></h1>
          <div className="">
            <div className="desc"><Translate value={`${courseClass}.introduction.descriprion`} /></div>
            <div className="share_button">
              <div className="bottom_hover "></div>
              <div className="slide">
                {width > 768 ? linktoFacebook : linktoFacebookPhone}
                {width > 768 ? lintToLinkedIn : lintToLinkedInPhone}
              </div>
              <div className="talk_to_friends">
                <img className="share_img" src={Images.share} alt="share" />
                <a href="" onClick={() => this.newWindow('https://www.linkedin.com/shareArticle?mini=true&url=https://INTShop.ua/courses&title=React courses&summary=My%20favorite%20developer%20program&source=LinkedIn')}><img className="icon_img" src={Images.linkedin} alt="INTShop linkedin" /></a>
                <div data-href="https://INTShop.ua/courses"><a href="" onClick={() => this.newWindow('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2FossINTShopystem.ua%2Fcourses&amp;src=sdkpreparse')}><img className="icon_img" src={Images.facebook} alt="INTShop facebook" /></a></div>
                <Translate value="courses.buttons.share" />
              </div>
            </div>
          </div>
          <div className="container_block">
            {
              Block.map(item => (
                <div key={item.text} className="icons">
                  <img src={item.icon} alt="some alt" />
                  <Translate value={item.text} className={`${item.saleText ? "withSale" : ""}${!item.class ? "" : item.class}`} />
                  <span className={`${item.saleText ? "sale" : "no-sale"}`}>
                    <Translate value={item.saleText ? item.saleText : ''} />
                  </span>
                </div>
              ))
            }
          </div>
          <button onClick={this.props.showForm} className="subscribe_button"><Translate value="courses.buttons.sign_in" /></button>
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    res: store.response,
  }),
  null,
)(CoursesHeader);
