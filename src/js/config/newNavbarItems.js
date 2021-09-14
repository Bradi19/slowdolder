export default [
  {
    title: 'navbar.main',
    path: '/',
    subItems: [],
  },
  {
    title: 'navbar.company',
    path: '',
    subItems: [
      {
        title: 'navbar.about',
        path: '/about',
      },
      {
        title: 'navbar.employee',
        path: '/employees',
      },
    ],
  },
  {
    title: 'navbar.positions',
    path: '/vacancies',
    subItems: [],
  },
  {
    title: 'navbar.training',
    path: '',
    subItems: [
      {
        title: 'navbar.baseCourses',
        path: '/base_course',
      },
      {
        title: 'navbar.selenium',
        path: '/selenium_ide_course',
      },
      {
        title: 'navbar.qaCourses',
        path: '/qaengine',
      },
      {
        title: 'navbar.reactCourses',
        path: '/courses',
      },
      {
        title: 'navbar.certificates',
        path: '/courses/graduated',
      },
    ],
  },
  {
    title: 'navbar.work',
    path: '',
    subItems: [
      {
        title: 'navbar.career',
        path: '/career',
      },
      {
        title: 'navbar.laborCond',
        path: '/labor',
      },
    ],
  },
  {
    title: 'navbar.compLife',
    path: '/blog/',
    redirect: true,
    // subItems: [
    //   {
    //     title: 'navbar.events',
    //     path: '/company/events',
    //   },
    //   {
    //     title: 'navbar.gallery',
    //     path: '/gallery',
    //   },
    // ],
  },
  {
    title: 'navbar.contacts',
    path: '/contacts',
    subItems: [],
  },
];
