import reactIcon from '../../images/courses/RNLogo.png';
import calendar from '../../images/courses/date.svg';
import location from '../../images/courses/location.svg';
import hryvna from '../../images/courses/hryvna.svg';

import pencil768 from '../../images/courses/pencil-768.svg';
import teg768 from '../../images/courses/tag-768.svg';
import wrench768 from '../../images/courses/wrench-768.svg';
import lamp768 from '../../images/courses/lamp-768.svg';

export const BlockBaseCourse = [
    {
        text: 'baseCourse.about_course.time',
        icon: calendar,
    },
    {
        text: 'baseCourse.about_course.place',
        icon: location,
    },
    {
        text: 'baseCourse.about_course.price',
        icon: hryvna,
        class: 'blue',
    },
];

export const BlockForCoursesBase = {
    icon: reactIcon,
};
export const afterCourseBlockBase = () => {
    return [
        {
            header: `baseCourse.afterCourse.header_1`,
            text: `baseCourse.afterCourse.text_1`,
            img: lamp768,
        },
        {
            header: `baseCourse.afterCourse.header_2`,
            text: `baseCourse.afterCourse.text_2`,
            img: teg768,
        },
        {
            header: `baseCourse.afterCourse.header_3`,
            text: `baseCourse.afterCourse.text_3`,
            img: pencil768,
        },
        {
            header: `baseCourse.afterCourse.header_4`,
            text: `baseCourse.afterCourse.text_4`,
            img: wrench768,
        },
    ];
};

export const PlanOfBaseCourse = [
    {
        header_1: 'baseCourse.lesson1.header',
        lesson_1: {
            title: 'baseCourse.lesson1.lesson',
            elements: {
                element_l_1: 'baseCourse.lesson1.text1',
                element_l_2: 'baseCourse.lesson1.text2',
                element_l_3: 'baseCourse.lesson1.text3',
            }
        },

    },
    {
        header_1: 'baseCourse.lesson2.header',
        lesson_1: {
            title: 'baseCourse.lesson2.lesson',
            elements: {
                element_l_1: 'baseCourse.lesson2.text1',
                element_l_2: 'baseCourse.lesson2.text2',
                element_l_3: 'baseCourse.lesson2.text3',
                element_l_4: 'baseCourse.lesson2.text4',
                element_l_5: 'baseCourse.lesson2.text5',
                element_l_6: 'baseCourse.lesson2.text6',
                element_l_7: 'baseCourse.lesson2.text7',
            }
        },
        lesson_2: {
            title: 'baseCourse.lesson3.lesson',
            elements: {
                element_r_1: 'baseCourse.lesson3.text1',
                element_r_2: 'baseCourse.lesson3.text2',
                element_r_3: 'baseCourse.lesson3.text3',
                element_r_4: 'baseCourse.lesson3.text4',
            }
        },
        lesson_3: {
            title: 'baseCourse.lesson4.lesson',
            elements: {
                element_c_1: 'baseCourse.lesson4.text1',
                element_c_2: 'baseCourse.lesson4.text2',
                element_c_3: 'baseCourse.lesson4.text3',
                element_c_4: 'baseCourse.lesson4.text4',
            }
        },
    },
    {
        header_1: 'baseCourse.lesson5.header',
        lesson_1: {
            title: 'baseCourse.lesson5.lesson',
            elements: {
                element_l_1: 'baseCourse.lesson5.text1',
                element_l_2: 'baseCourse.lesson5.text2',
                element_l_3: 'baseCourse.lesson5.text3',
                element_l_4: 'baseCourse.lesson5.text4',
                element_l_5: 'baseCourse.lesson5.text5',
                element_l_6: 'baseCourse.lesson5.text6',
            }
        },
        lesson_2: {
            title: 'baseCourse.lesson6.lesson',
            elements: {
                element_r_1: 'baseCourse.lesson6.text1',
                element_r_2: 'baseCourse.lesson6.text2',
                element_r_3: 'baseCourse.lesson6.text3',
            }
        },
        lesson_3: {
            title: 'baseCourse.lesson7.lesson',
            elements: {
                element_c_1: 'baseCourse.lesson7.text1',
                element_c_2: 'baseCourse.lesson7.text2',
                element_c_3: 'baseCourse.lesson7.text3',
            }
        },
        lesson_4: {
            title: 'baseCourse.lesson8.lesson',
            elements: {
                element_b_1: 'baseCourse.lesson8.text1',
                element_b_2: 'baseCourse.lesson8.text2',
                element_b_3: 'baseCourse.lesson8.text3',
            }
        },
    },
    {
        header_1: 'baseCourse.lesson9.header',
        lesson_1: {
            title: 'baseCourse.lesson9.lesson',
            elements: {
                element_l_1: 'baseCourse.lesson9.text1',
                element_l_2: 'baseCourse.lesson9.text2',
                element_l_3: 'baseCourse.lesson9.text3',
                element_l_4: 'baseCourse.lesson9.text4',
            }
        },
        lesson_2: {
            title: 'baseCourse.lesson10.lesson',
            elements: {
                element_r_1: 'baseCourse.lesson10.text1',
                element_r_2: 'baseCourse.lesson10.text2',
                element_r_3: 'baseCourse.lesson10.text3',
            }
        },
        lesson_3: {
            title: 'baseCourse.lesson11.lesson',
            elements: {
                element_c_1: 'baseCourse.lesson11.text1',
                element_c_2: 'baseCourse.lesson11.text2',
                element_c_3: 'baseCourse.lesson11.text3',
            }
        },
        lesson_4: {
            title: 'baseCourse.lesson12.lesson',
            elements: {
                element_b_1: 'baseCourse.lesson12.text1',
                element_b_2: 'baseCourse.lesson12.text2',
                element_b_3: 'baseCourse.lesson12.text3',
                element_b_4: 'baseCourse.lesson12.text4',
            }
        },
        lesson_5: {
            title: 'baseCourse.lesson13.lesson',
            elements: {
                element_e_1: 'baseCourse.lesson13.text1',
                element_e_2: 'baseCourse.lesson13.text2',
                element_e_3: 'baseCourse.lesson13.text3',
            }
        },
        lesson_6: {
            title: 'baseCourse.lesson14.lesson',
            elements: {
                element_d_1: 'baseCourse.lesson14.text1',
                element_d_2: 'baseCourse.lesson14.text2',
                element_d_3: 'baseCourse.lesson14.text3',
                element_d_4: 'baseCourse.lesson14.text4',
                element_d_5: 'baseCourse.lesson14.text5',
            }
        },
        lesson_7: {
            title: 'baseCourse.lesson15.lesson',
            elements: {
                element_f_1: 'baseCourse.lesson15.text1',
                element_f_2: 'baseCourse.lesson15.text2',
                element_f_3: 'baseCourse.lesson15.text3',
                element_f_4: 'baseCourse.lesson15.text4',
                element_f_5: 'baseCourse.lesson15.text5',
                element_f_6: 'baseCourse.lesson15.text6',
            }
        },
    },
    {
        header_1: 'baseCourse.lesson16.header',
        lesson_1: {
            title: 'baseCourse.lesson16.lesson',
            elements: {
                element_l_1: 'baseCourse.lesson16.text1',
                element_l_2: 'baseCourse.lesson16.text2',
                element_l_3: 'baseCourse.lesson16.text3',
                element_l_4: 'baseCourse.lesson16.text4',
                element_l_5: 'baseCourse.lesson16.text5',
                element_l_6: 'baseCourse.lesson16.text6',
                element_l_7: 'baseCourse.lesson16.text7',
            }
        },
        lesson_2: {
            title: 'baseCourse.lesson17.lesson',
            elements: {
                element_r_1: 'baseCourse.lesson17.text1',
                element_r_2: 'baseCourse.lesson17.text2',
                element_r_3: 'baseCourse.lesson17.text3',
                element_r_4: 'baseCourse.lesson17.text4',
                element_r_5: 'baseCourse.lesson17.text5',
                element_r_6: 'baseCourse.lesson17.text6',
                element_r_7: 'baseCourse.lesson17.text7',
            }
        },
    },
];
