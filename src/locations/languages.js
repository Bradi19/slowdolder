/* eslint-disable import/prefer-default-export */
export const languages = {
  ru: {
    headerItems: [
      'Главная',
      'Компания',
      'Вакансии',
      'Обучение',
      'Работа',
      'Блог',
      'Контакты',
    ],
    welcomeBlock: {
      title: 'Привет, мы',
      text: 'В нашу команду мы ищем молодых и талантливых сотрудников Мы готовы к сотрудничеству с вами.',
      buttonName: 'Все вакансии',
    },
    openPositionBlock: {
      header: 'Открытые вакансии',
    },
    companyIntroductionBlock: {
      header: 'Компания OSSysyem',
      text1: 'В нашей команде мы уделяем внимание каждому проекту. Мы изучаем требования клиента и находим оптимальное решение.',
      text2: 'Мы следим за инновациями в сфере',
      text3: 'Наша команда всегда открыта для новых интересных предложений. Мы готовы сотрудничать по любому интересующему вас вопросу в сфере информационных технологий',
    },
    companyLifeBlock: {
      header: 'Жизнь компании',
    },
    companyOffersBlock: {
      header: 'Мы предлагаем',
      items: [
        {
          title: 'Бесплатные уроки английского',
          body: 'Каждый понедельник и среду проходят занятия по английскому языку',
        },
        {
          title: 'Уютный офис',
          body: 'Просторный и светный офис с видом на море, комфортное рабочее место и качественное оборудование',
        },
        {
          title: 'Карьерный рост',
          body: 'В нашей компании мы подерживаем сотрудников в решении развиваться и рости',
        },
        {
          title: 'Комфортная комната отдыха',
          body: 'Спокойная и тихая обстановка где можно расслабиться и отвлечься от работы',
        },
      ],
      buttonTitle: 'Подробнее',
    },
    footer: {
      mapOfSite: 'Карта сайта',
    },
    vacanciesPage: {
      openVacancies: 'Открытые вакансии',
      spesialyryFilter: 'Специальность',
      levelFilter: 'Уровень',
    },
    vacanciesDetailPage: {
      description: 'Описание',
      weOffer: 'Мы предлогаем',
      responsibility: 'Обязанности',
      requirements: 'требования',
    },
    applicationForm: {
      title: 'Отправить заявку',
      name: 'Имя*',
      tel: 'Номер телефона*',
      uploadCV: 'Загрузить резуме',
      linkForCV: 'Сылка на резуме',
      linkForPortfolio: 'Сылка на портфолио',
      buttonTitle: 'Отправить заявку',
      linkidInTitle: 'Отправить заявку через',
      namePlace: 'Введите ваше имя',
      emailPlace: 'Введите e-mail',
    },
    careerPage: {
      header: 'Постройте карьеру с нами',
      steps: {
        header: 'Как попасть в ОSSystem',
        arrOfSteps: [
          'Отправка резюме',
          'Ознакомительное и техническое собеседования',
          'Техническое задание',
          'Предложение о работе',
        ],
      },
      offers: {
        header: 'Мы предлогаем',
        body: [
          'Пятидневный рабочий график',
          'Занятия английского языка',
          'Трансфер для иногородних сотрудников',
          'Оплата труда 2 раза в месяц',
          '20 рабочих дней отпуска + 1 день за каждый отработанный год',
          'Комфортабельный офис с видом на море',
        ],
      },
      development: {
        header: 'Развитие карьеры',
      },
      conditions: {
        header: 'Условия работы',
        arrOfConditions: [
          {
            header: 'Рабочий график',
            body: 'Понедельник-Пятница, с 9-00 до 18-00.\n' +
                  'Возможны смещения рабочего рафика +/- несколько часов, если этого требует Ваш проект/заказчик (например с 11-00 до 20-00). Все выходные по государственным и религиозным праздникам, если этого допускает проект, в котором Вы принимаете участие. \n' +
                  'Нет удаленной работы',
          },
          {
            header: 'Овертайм или работа вне офиса',
            body: 'Иногда случаются ситуации, когда приходится работать более 8 часов в день или по выходным. Минимум за один день перед овертаймом Вас поставят в известность о такой необходимости.\n' +
                  'Если сотрудник по своей инициативе собирается работать из дома (либо проект горит и необходим овертайм) в выходные/отпуск/вечером, то он должен согласовать это со своим менеджером задачи и ожидаемый результат работ. Менеджер в праве отказать в такой просьбе (в зависимости от стажа работы сотрудника, загруженности проекта, критичности выполняемой задачи, доверия к сотруднику и пр.)',
          },
          {
            header: 'Отпуск',
            body: 'Каждый работник имеет 20 рабочих дней в течение года (с января по декабрь включительно), которые он может использовать, как выходные, по своему усмотрению. За каждый год, отработанный в компании, к этому числу добавляется 1 день (начисляется в январе), но максимум 25 дней. “Выходные дни” начисляются в начале года. В случае, если сотрудник начинает работать в компании не с начала календарного года, то количество выходных дней начисляется пропорционально остатку до конца года (из расчета 20 дней в год). Переносить дни на следующий год нельзя - если остались неизрасходованные, их можно использовать до 15 января.\n' +
                  'Все отпуска планируются в декабре текущего года на следующий год. У нас есть план отпусков на год, с учетом приоритетов.Тот, кто проработал в компании дольше, имеет приоритет выбора дат.\n',
          },
          {
            header: 'Оплата труда',
            body: 'Оплата труда происходит 2 раза в месяц, с 1-го по 10-е число каждого месяца (зарплата за предыдущий месяц), с 20-го по 25-е (аванс за текущий)\n',
          },
          {
            header: 'Пересмотр уровня заработной платы',
            body: 'Пересмотр уровня заработной платы по окончанию испытательного срока оценивается во время прохождения тестирования. Пройти его снова можно только спустя 5-7 месяцев стабильного результата. С информацией для тестирования можно ознакомиться здесь. Рекомендации по поводу уровня Вашей заработной платы вносят тимлид и проджект менеджер, которые работают с Вами на одном проекте.',
          },
          {
            header: 'Бонусы',
            body: 'После того как сотрудник отработает более 1 года, компания предоставляет ему бонус. \n' +
                  'Чаще всего это страховка от Intosana для сотрудника и его семьи. Также это может быть \n' +
                  'годовой безлимитный абонемент в тренажерный зал. Мы открыты для предложений, \n' +
                  'так​ ​что​ ​с​ ​удовольствием​ ​рассмотрим​ ​и​ ​другие​ ​варианты.',
          },
          {
            header: 'Проезд',
            body: 'Ежедневно ходит микроавтобус для иногородних сотрудников (Одесса-Черноморск). \n' +
                  'Для сотрудников, проживающих не по маршруту автобуса предусмотрена компенсация проезда, которая выдается вместе с зарплатой за весь месяц из расчета маршрутного такси(например: “Черноморск - Б.Долина” и т.п.).',
          },
          {
            header: 'Занятя по английскому',
            body: 'Два раза в неделю (понедельник и среда) у нас в классе проходят занятия по английскому языку. Существует 3 группы, в зависимости от уровня владения языком.' +
                  'Посещать курсы английского крайне желательно всем! Но если твой уровень ниже intermediate, то обязательно! (оценку уровня делает преподаватель)\n' +
                  'При этом потраченные на уроки часы необходимо отработать в течение текущей недели (но не за счет времени, отведенного на обед). \n',
          },
        ],
        buttonName: 'Условия работы в компании',
      },
    },
  },
  ua: {
    headerItems: [
      'Головна',
      'Компанія',
      'Вакансії',
      'Навчання',
      'Работа',
      'Блог',
      'Контакти',
    ],
    welcomeBlock: {
      title: 'Привіт, мы',
      text: 'В нашу команду ми шукаємо молодих і талановитих співробітників Ми готові до співпраці з вами.',
      buttonName: 'Всі вакансіі',
    },
    openPositionBlock: {
      header: 'Відкриті вакансії',
    },
    companyIntroductionBlock: {
      header: 'Компанія OSSysyem',
      text1: 'В нашій команді ми приділяємо увагу кожному проекту. Ми вивчаємо вимоги клієнта і знаходимо оптимальне рішення.',
      text2: 'Ми стежимо за інноваціями в сфері',
      text3: 'Наша команда завжди відкрита для нових цікавих пропозицій. Ми готові співпрацювати з будь-якого вас питання в сфері інформаційних технологій',
    },
    companyLifeBlock: {
      header: 'Блог',
    },
    companyOffersBlock: {
      header: 'Ми пропонуємо',
      items: [
        {
          title: 'Безкоштовні уроки англійської',
          body: 'Кожен понеділок і середу проходять заняття з англійської мови',
        },
        {
          title: 'Затишний офіс',
          body: 'Просторий і светний офіс з видом на море, комфортне робоче місце і якісне обладнання',
        },
        {
          title: 'Кар\'єрний ріст',
          body: 'У нашій компанії ми подорожувати співробітників у вирішенні розвиватися і рости',
        },
        {
          title: 'Комфортна кімната відпочинку',
          body: 'Спокійна і тиха обстановка де можна розслабитися і відволіктися від роботи',
        },
      ],
      buttonTitle: 'Детальніше',
    },
    footer: {
      mapOfSite: 'Карта сайта',
    },
    vacanciesPage: {
      openVacancies: 'Відкриті вакансії',
      spesialyryFilter: 'Спеціальність',
      levelFilter: 'Рівень',
    },
    vacanciesDetailPage: {
      description: 'Опис',
      weOffer: 'Ми пропонуємо',
      responsibility: 'Обов\'язки',
      requirements: 'вимоги',
    },
    applicationForm: {
      title: 'Надіслати заявку',
      name: 'Ім`я *',
      tel: 'Номер телефону *',
      uploadCV: 'Завантажити резуме',
      linkForCV: 'Силка на резуме',
      linkForPortfolio: 'Силка на портфоліо',
      buttonTitle: 'Надіслати заявку',
      linkidInTitle: 'Надіслати заявку через',
      namePlace: 'Введіть ваше ім\'я',
      emailPlace: 'Введіть e-mail',
    },
    careerPage: {
      header: 'Кар\'єра в INTShop',
      offers: {
        header: 'Ми пропонуємо',
        body: [
          'Пятидневный рабочий график',
          'Занятия английского языка',
          'Трансфер для иногородних сотрудников',
          'Оплата труда 2 раза в месяц',
          '20 рабочих дней отпуска + 1 день за каждый отработанный год',
          'Комфортабельный офис с видом на море',
        ],
      },
      development: {
        header: 'Развитие карьеры',
      },
      steps: {
        header: 'Как потрапити до ОSSystem',
        arrOfSteps: [
          'Отправіть резуме',
          'Ознакомітельное співбесіду',
          'Техніческое співбесіду',
          ' При на роботу',
        ],
      },
      conditions: {
        header: 'Умови роботи',
        arrOfConditions: [
          {
            header: 'Робочий графік',
            body: 'Понеділок-П\'ятниця, з 9-00 до 18-00. \n' +
                    'Можливі зсуви робочого рафіка +/- кілька годин, якщо цього вимагає Ваш проект / замовник (наприклад з 11-00 до 20-00). Всі вихідні по державних і релігійних свят, якщо цього допускає проект, в якому Ви приймаєте участь. \n' +
                    'Ні віддаленої роботи',
          },
          {
            header: 'Овертайм або робота поза офісом',
            body: 'Іноді трапляються ситуації, коли доводиться працювати більше 8 годин на день або по вихідним. Мінімум за один день перед овертаймом Вас повідомлять про таку необхідність. \n' +
                    'Якщо співробітник за своєю ініціативою збирається працювати з дому (або проект горить і необхідний овертайм) у вихідні / відпустку / ввечері, то він повинен узгодити це зі своїм менеджером завдання і очікуваний результат робіт. Менеджер в праві відмовити в такому проханні (в залежності від стажу роботи співробітника, завантаженості проекту, критичності виконуваного завдання, довіри до співробітника та ін.) ',
          },
          {
            header: 'Відпустка',
            body: 'Кожен працівник має 20 робочих днів протягом року (з січня по грудень включно), які він може використовувати, як вихідні, на свій розсуд. За кожен рік, відпрацьований в компанії, до цього числа додається 1 день (нараховується в січні), але максимум 25 днів. "Вихідні дні" нараховуються на початку року. У разі, якщо співробітник починає працювати в компанії не з початку календарного року, то кількість вихідних днів нараховується пропорційно залишку до кінця року (з розрахунку 20 днів на рік). Переносити дні на наступний рік не можна - якщо залишилися невитрачені, їх можна використовувати до 15 січня. \n' +
                    'Все відпустки плануються в грудні поточного року на наступний рік. У нас є план відпусток на рік, з урахуванням пріорітетов.Тот, хто пропрацював в компанії довше, має пріоритет вибору дат. \n',
          },
          {
            header: 'Оплата праці',
            body: 'Оплата праці відбувається 2 рази на місяць, з 1-го по 10-е число кожного місяця (зарплата за попередній місяць), з 20-го по 25-е (аванс за поточний) \n',
          },
          {
            header: 'Перегляд рівня заробітної плати',
            body: 'Перегляд рівня заробітної плати по закінченню випробувального терміну оцінюється під час проходження тестування. Пройти його знову можна тільки через 5-7 місяців стабільного результату. З інформацією для тестування можна ознайомитися тут. Рекомендації з приводу рівня Вашої заробітної плати вносять тімліда і проджект менеджер, які працюють з Вами на одному проекті. ',
          },
          {
            header: 'Бонуси',
            body: 'Після того як співробітник відпрацює більше 1 року, компанія надає йому бонус. \n' +
                    'Найчастіше це страховка від Intosana для співробітника і його сім\'ї. Також це може бути \n ' +
                    'Річний безлімітний абонемент в тренажерний зал. Ми відкриті для пропозицій, \n ' +
                    'Так що з задоволенням розглянемо й інші варіанти.',
          },
          {
            header: 'Проїзд',
            body: 'Щодня ходить мікроавтобус для іногородніх співробітників (Одеса-Чорноморськ). \n' +
                    'Для співробітників, які проживають не за маршрутом автобуса передбачена компенсація проїзду, яка видається разом із зарплатою за весь місяць з розрахунку маршрутного таксі (наприклад: "Чорноморськ - Б.Долина" і т.п.).',
          },
          {
            header: 'заняття з англійської',
            body: 'Два рази в тиждень (понеділок і середа) у нас в класі проходять заняття з англійської мови. Існує 3 групи, в залежності від рівня володіння мовою. ' +
                    'Відвідувати курси англійської вкрай бажано всім! Але якщо твій рівень нижче intermediate, то обов\'язково! (Оцінку рівня робить викладач) \n' +
                    'При цьому витрачені на уроки годинник необхідно відпрацювати протягом поточного тижня (але не за рахунок часу, відведеного на обід). \n',
          },
        ],
        buttonName: 'Умови роботі в компанії',
      },

    },
  },
  en: {
    headerItems: [
      'Main',
      'Company',
      'Careers',
      'Work in INTShop',
      'Company life',
      'Contacts',
    ],
    openPositionBlock: {
      header: 'Open vacancies',
    },
    welcomeBlock: {
      title: 'Hello, we are',
      text: 'In our team we are looking for young and talented employees. We are ready to cooperate with you',
      buttonName: 'All vacancies',
    },
    companyIntroductionBlock: {
      header: 'Company OSSysyem',
      text1: 'In our team, we pay attention to each project. We learn the requirements of the client and find the optimal solution.',
      text2: 'We follow innovations in the field of',
      text3: 'Our team is always open for new interesting offers. We are ready to cooperate on any matter of interest to you in the field of information technology',
    },
    companyLifeBlock: {
      header: 'Company life',
    },
    companyOffersBlock: {
      header: 'We offer',
      items: [
        {
          title: 'Free English Lessons',
          body: 'Every Monday and Wednesday are classes in English',
        },
        {
          title: 'Comfortable office',
          body: 'Spacious and light office with sea view, comfortable work place and quality equipment',
        },
        {
          title: 'Career',
          body: 'In our company we support employees in the decision to develop and grow',
        },
        {
          title: 'Comfortable rest room',
          body: 'Quiet and quiet environment where you can relax and escape from work',
        },
      ],
      buttonTitle: 'Details',
    },
    footer: {
      mapOfSite: 'Map of site',
    },
    vacanciesPage: {
      openVacancies: 'Open vacancies',
      spesialyryFilter: 'Specialty',
      levelFilter: 'Level',
    },
    vacanciesDetailPage: {
      description: 'Description',
      weOffer: 'We are offering',
      responsibility: 'Responsibilities',
      requirements: 'Requirements',
    },
    applicationForm: {
      title: 'Send an application',
      name: 'Name *',
      tel: 'Phone number *',
      uploadCV: 'Load CV',
      linkForCV: 'Link to your CV',
      linkForPortfolio: 'Link to your portfolio',
      buttonTitle: 'Send request',
      linkidInTitle: 'Send an order through',
      namePlace: 'Enter you name',
      emailPlace: 'Enter you e-mail',
    },
    careerPage: {
      header: 'Careers in INTShop',
      offers: {
        header: 'Мы предлогаеммм',
        body: [
          'Пятидневный рабочий график',
          'Занятия английского языка',
          'Трансфер для иногородних сотрудников',
          'Оплата труда 2 раза в месяц',
          '20 рабочих дней отпуска + 1 день за каждый отработанный год',
          'Комфортабельный офис с видом на море',
        ],
      },
      development: {
        header: 'Развитие карьеры',
      },
      steps: {
        header: 'How to get to INTShop',
        arrOfSteps: [
          'Send Resum',
          'Interview interview',
          'Technical interview',
          'Taking to work',
        ],
      },
      conditions: {
        header: 'Working Conditions',
        arrOfConditions: [
          {
            header: 'Work schedule',
            body: 'Monday-Friday, from 9-00 to 18-00. \n' +
                    'Work shifts are possible +/- for several hours, if your project / customer requires it (for example, from 11-00 to 20-00). All weekends on state and religious holidays, if the project in which you are participating allows this. \n ' +
                    'No remote work',
          },
          {
            header: 'Overtime or out of office',
            body: 'Sometimes there are situations when you have to work more than 8 hours a day or on weekends. At least one day before the overtime you will be notified of this need. \n' +
                    'If an employee on his own initiative is going to work from home (or the project burns and needs overtime) at the weekend / vacation / in the evening, then he must agree on this with his task manager and the expected result of the work. The manager has the right to refuse such a request (depending on the length of service of the employee, the workload of the project, the criticality of the task, the trust in the employee, etc.)',
          },
          {
            header: 'Holiday',
            body: 'Each employee has 20 working days during the year (January through December inclusive), which he can use as a weekend, at his discretion. For each year worked in the company, to this number is added 1 day (accrued in January), but a maximum of 25 days. "Weekends" are charged at the beginning of the year. In case the employee starts working in the company not from the beginning of the calendar year, the number of days off is accrued in proportion to the balance before the end of the year (at the rate of 20 days per year). You can not postpone the days for the next year - if you have left unused, you can use them until January 15. \n' +
                    'All vacations are planned for December of this year for the next year. We have a holiday plan for a year, taking into account the priorities. That who has worked at the company for a longer time has the priority of choosing dates. \n ',
          },
          {
            header: 'Payment of labor',
            body: 'Payment takes place 2 times a month, from the 1st to the 10th day of each month (salary for the previous month), from the 20th to the 25th (advance for the current month) \n',
          },
          {
            header: 'Review of the level of wages',
            body: 'The revision of the wage level at the end of the trial period is evaluated during the testing. You can go through it again only after 5-7 months of stable results. The information for testing can be found here. Recommendations on the level of your wages are paid by the team and project manager who work with you on the same project. ',
          },
          {
            header: 'Bonuses',
            body: 'After the employee has worked more than 1 year, the company gives him a bonus. \n' +
                    'Most often it is the insurance from Intosana for the employee and his family. It can also be \n' +
                    'annual unlimited subscription to the gym. We are open to suggestions, \n' +
                    'so we\'ll look at other options with pleasure.',
          },
          {
            header: 'Directions',
            body: 'A minibus is going daily for out-of-town employees (Odessa-Chernomorsk). \n' +
                    'For employees who live outside the bus route, there is a compensation for travel that is issued together with the salary for the entire month from the calculation of a fixed-route taxi (for example:" Chernomorsk - B.Dolina ", etc.). ',
          },
          {
            header: 'Busy in English',
            body: 'Twice a week (Monday and Wednesday) we have classes in the class in English. There are 3 groups, depending on the level of language proficiency. ' +
                    'It is highly desirable to attend English courses! But if your level is lower than the intermediate, then it is necessary! (the teacher makes a grade assessment) \n ' +
                    'In this case, the hours spent for lessons must be worked during the current week (but not at the expense of the time allotted for lunch). \n ',
          },
        ],
        buttonName: 'Working Conditions',
      },
    },
  },
};
