import seleniumIcon from '../../images/selenium/seleniumIcon.svg';

import calendar from '../../images/courses/date.svg';
import location from '../../images/courses/location.svg';
import hryvna from '../../images/courses/hryvna.svg';

import tools from '../../images/selenium/tools.svg';
import check from '../../images/selenium/check.svg';
import userEmulation from '../../images/selenium/userEmulation.svg';
import search from '../../images/selenium/search.svg';

import selenium from '../../images/selenium/selenium.jpg';
import xpath from '../../images/selenium/xpath.jpg';
import devTools from '../../images/selenium/devtools.jpg';
import browsers from '../../images/selenium/browsers.jpg';

export const BlockSelenium = [
    {
        text: 'selenium.about_course.time',
        icon: calendar,
    },
    {
        text: 'selenium.about_course.place',
        icon: location,
    },
    {
        text: 'selenium.about_course.price',
        icon: hryvna,
    },
];

export const BlockForCoursesSelenium = {
    icon: seleniumIcon,
};
export const afterCourseBlockSelenium = () => {
    return [
        {
            header: `selenium.afterCourse.header_1`,
            text: `selenium.afterCourse.text_1`,
            img: tools,
        },
        {
            header: `selenium.afterCourse.header_2`,
            text: `selenium.afterCourse.text_2`,
            img: check,
        },
        {
            header: `selenium.afterCourse.header_3`,
            text: `selenium.afterCourse.text_3`,
            img: userEmulation,
        },
        {
            header: `selenium.afterCourse.header_4`,
            text: `selenium.afterCourse.text_4`,
            img: search,
        },
    ];
  };


export const MaterialsSelenium = [
    selenium,
    xpath,
    devTools,
    browsers,
];