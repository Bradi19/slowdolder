import reactIcon from '../../images/courses/RNLogo.png';
import calendar from '../../images/courses/date.svg';
import location from '../../images/courses/location.svg';
import hryvna from '../../images/courses/hryvna.svg';

import reactJs from '../../images/courses/materials/image1.jpg';
import nodeJs from '../../images/courses/materials/image4.jpg';
import redux from '../../images/courses/materials/image2.jpg';
import webpack from '../../images/courses/materials/image3.jpg';
import materialDB from '../../images/courses/materials/image5.jpg';
import softSkills from '../../images/courses/materials/image6.jpg';

import baseCourseSmall from '../../images/baseCourse/smallRect.png';

import facebook from '../../images/courses/facebook.svg';
import facebookWhite from '../../images/courses/facebook_white.png';
import instagram from '../../images/courses/instagram.svg';
import instagramWhite from '../../images/courses/instagram_white.png';
import linkedin from '../../images/courses/linkedin.svg';
import linkedinWhite from '../../images/courses/linkedin_white.png';
import photo from '../../images/courses/ph.png';
import photo768 from '../../images/courses/ph768.png';
import photo375 from '../../images/courses/ph375.png';
import leftBrace from '../../images/courses/curly-bracer-left.png';
import rightBrace from '../../images/courses/curly-bracer-right.png';
import leftBraceSmall from '../../images/courses/curly-left-small.png';
import rightBraceSmall from '../../images/courses/curly-right-small.png';

import pencil768 from '../../images/courses/pencil-768.svg';
import teg768 from '../../images/courses/tag-768.svg';
import wrench768 from '../../images/courses/wrench-768.svg';
import lamp768 from '../../images/courses/lamp-768.svg';

import arrowRight from '../../images/courses/Group 2.svg';
import arrowLeft from '../../images/courses/Group.svg';
import share from '../../images/courses/share.svg';

import milestone from '../../images/courses/milestone.svg';

export const BlockForCoursesReact = {
  icon: reactIcon,
};
export const afterCourseBlockReact = () => {
  return [
      {
          header: `react.afterCourse.header_1`,
          text: `react.afterCourse.text_1`,
          img: lamp768,
      },
      {
          header: `react.afterCourse.header_2`,
          text: `react.afterCourse.text_2`,
          img: teg768,
      },
      {
          header: `react.afterCourse.header_3`,
          text: `react.afterCourse.text_3`,
          img: pencil768,
      },
      {
          header: `react.afterCourse.header_4`,
          text: `react.afterCourse.text_4`,
          img: wrench768,
      },
  ];
};

export const BlockReact = [
  {
    text: 'react.about_course.time',
    icon: calendar,
  },
  {
    text: 'react.about_course.place',
    icon: location,
  },
  {
    text: 'react.about_course.price',
    icon: hryvna,
    // saleText: 'react.about_course.salePrice',
  },
];

export const MaterialsReact = [
  reactJs,
  redux,
  webpack,
  nodeJs,
  materialDB,
  softSkills,
];

export const ImagesHeader = {
  linkedin,
  facebook,
};

export const Images = {
  facebookWhite,
  instagramWhite,
  linkedinWhite,
  photo,
  photo768,
  photo375,
  instagram,
  linkedin,
  facebook,
  arrowRight,
  arrowLeft,
  share,
  leftBrace,
  rightBrace,
  leftBraceSmall,
  rightBraceSmall,
  pencil768,
  lamp768,
  wrench768,
  teg768,
  baseCourseSmall,
  milestone
};

export const PlanOfCourseReact = [
  {
    lesson_1: 'react.lesson1.lesson',
    lesson_2: 'react.lesson2.lesson',
    header_1: 'react.lesson1.header',
    header_2: 'react.lesson2.header',
    element_l_1: 'react.lesson1.text1',
    element_l_2: 'react.lesson1.text2',
    element_l_3: 'react.lesson1.text3',
    element_l_4: 'react.lesson1.text4',
    element_r_1: 'react.lesson2.text1',
    element_r_2: 'react.lesson2.text2',
    element_r_3: 'react.lesson2.text3',
    element_r_4: 'react.lesson2.text4',
    element_r_5: 'react.lesson2.text5',
  },
  {
    lesson_1: 'react.lesson3.lesson',
    lesson_2: 'react.lesson4.lesson',
    header_1: 'react.lesson3.header',
    header_2: 'react.lesson4.header',
    element_l_1: 'react.lesson3.text1',
    element_l_2: 'react.lesson3.text2',
    element_l_3: 'react.lesson3.text3',
    element_l_4: 'react.lesson3.text4',
    element_r_1: 'react.lesson4.text1',
    element_r_2: 'react.lesson4.text2',
    element_r_3: 'react.lesson4.text3',
    element_r_4: 'react.lesson4.text4',
  },
  {
    lesson_1: 'react.lesson5.lesson',
    lesson_2: 'react.lesson6.lesson',
    header_1: 'react.lesson5.header',
    header_2: 'react.lesson6.header',
    element_l_1: 'react.lesson5.text1',
    element_l_2: 'react.lesson5.text2',
    element_l_3: 'react.lesson5.text3',
    element_r_1: 'react.lesson6.text1',
    element_r_2: 'react.lesson6.text2',
    element_r_3: 'react.lesson6.text3',
    element_r_4: 'react.lesson6.text4',
  },
  {
    lesson_1: 'react.lesson7.lesson',
    lesson_2: 'react.lesson8.lesson',
    header_1: 'react.lesson7.header',
    header_2: 'react.lesson8.header',
    element_l_1: 'react.lesson7.text1',
    element_l_2: 'react.lesson7.text2',
    element_l_3: 'react.lesson7.text3',
    element_l_4: 'react.lesson7.text4',
    element_l_5: 'react.lesson7.text5',
    element_r_1: 'react.lesson8.text1',
    element_r_2: 'react.lesson8.text2',
    element_r_3: 'react.lesson8.text3',
    element_r_4: 'react.lesson8.text4',
    element_r_5: 'react.lesson8.text5',
  },
  {
    lesson_1: 'react.lesson9.lesson',
    lesson_2: 'react.lesson10.lesson',
    header_1: 'react.lesson9.header',
    header_2: 'react.lesson10.header',
    element_l_1: 'react.lesson9.text1',
    element_l_2: 'react.lesson9.text2',
    element_r_1: 'react.lesson10.text1',
    element_r_2: 'react.lesson10.text2',
  },
  {
    lesson_1: 'react.lesson11.lesson',
    lesson_2: 'react.lesson12.lesson',
    header_1: 'react.lesson11.header',
    header_2: 'react.lesson12.header',
    element_l_1: 'react.lesson11.text1',
    element_l_2: 'react.lesson11.text2',
    element_l_3: 'react.lesson11.text3',
    element_l_4: 'react.lesson11.text4',
    element_r_1: 'react.lesson12.text1',
    element_r_2: 'react.lesson12.text2',
    element_r_3: 'react.lesson12.text3',
  },
];
