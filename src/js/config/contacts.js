// for contacts page
import location from '../../images/placeholder2.svg';
import phone from '../../images/smartphone.svg';
import email from '../../images/email.svg';
import facebook from '../../images/contacts/facebook-logo.svg';
import facebookHover from '../../images/contacts/facebook-logo-hover.svg';
import linkedin from '../../images/contacts/linked-in-logo.svg';
import linkedinHover from '../../images/contacts/linked-in-logo-hover.svg';
import instagram from '../../images/contacts/inst.svg';
import instagramHover from '../../images/contacts/inst-logo-hover.svg';
import footerInst from '../../images/footer/inst.svg';
import footerFacebook from '../../images/footer/facebook-logo.svg';
import footerLinkedin from '../../images/footer/linked-in-logo.svg';
import footerInstHover from '../../images/footer/hover/inst (3).svg';
import footerFacebookHover from '../../images/footer/hover/facebook-logo (3).svg';
import footerLinkedinHover from '../../images/footer/hover/linked-in-logo (3).svg';
import trophy from '../../images/aboutUs/trophy.svg';
import increase from '../../images/aboutUs/increase.svg';
import team from '../../images/aboutUs/team.svg';

import trophy2 from '../../images/aboutUs/mobile/trophy (2).svg';
import increase2 from '../../images/aboutUs/mobile/increase (1).svg';
import team2 from '../../images/aboutUs/mobile/team (1).svg';

export const mainContacts = [
  {
    type: 'adress',
    text: 'contacts.adr',
    icon: location,
    href: 'copy',
  },
  {
    type: 'phone',
    text: 'contacts.phone',
    icon: phone,
    href: 'tel:+380504005993',
  },
  {
    type: 'email',
    text: 'contacts.mail',
    icon: email,
    href: 'mailto:office@ossystem.com.ua?subject=Ossystem',
  },
];

export const mainSocials = [
  {
    type: 'facebook',
    link: 'https://www.facebook.com/ossystem.ltd',
    icon: facebook,
    iconHover: facebookHover,
    footerIcon: footerFacebook,
    footerHoverIcon: footerFacebookHover,
    className: 'footerFacebookIcon',
  },
  {
    type: 'linkedin',
    link: 'https://www.linkedin.com/company/3552182',
    icon: linkedin,
    iconHover: linkedinHover,
    footerIcon: footerLinkedin,
    footerHoverIcon: footerLinkedinHover,
    className: 'footerLinkedinIcon',
  },
  {
    type: 'instagram',
    link: 'https://www.instagram.com/ossystem_company',
    icon: instagram,
    iconHover: instagramHover,
    footerIcon: footerInst,
    footerHoverIcon: footerInstHover,
    className: 'footerInstIcon',
  },
];

export const history = [
  2020,
  2019,
  2018,
  2017,
  2016,
  2014,
  2013,
  2011,
  2010,
  2007,
];

export const aboutItemsData = [
  {
    linkText: 'about.aboutItemsData.linkText1',
    title: 'about.aboutItemsData.title1',
    linkText11: 'about.aboutItemsData.linkText11',
    imgUrl: trophy,
  },
  {
    linkText: 'about.aboutItemsData.linkText2',
    title: 'about.aboutItemsData.title2',
    imgUrl: increase,
  },
  {
    linkText: 'about.aboutItemsData.linkText3',
    title: 'about.aboutItemsData.title3',
    imgUrl: team,
  },
];

export const aboutItemsDataMobile = [
  {
    linkText: 'about.aboutItemsData.linkText1',
    title: 'about.aboutItemsData.title1',
    linkText11: 'about.aboutItemsData.linkText11',
    imgUrl: trophy2,
  },
  {
    linkText: 'about.aboutItemsData.linkText2',
    title: 'about.aboutItemsData.title2',
    imgUrl: increase2,
  },
  {
    linkText: 'about.aboutItemsData.linkText3',
    title: 'about.aboutItemsData.title3',
    imgUrl: team2,
  },
];
