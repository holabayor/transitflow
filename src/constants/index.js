import {
  call,
  email,
  instagram,
  facebook,
  linkedin,
  twitter,
  time,
  service1,
  service2,
  service3,
  service4,
} from '../assets';

export const headerInfo = [
  {
    name: 'time',
    text: 'Mon - Sat 9.00 - 19.00',
    details: 'Sunday Closed',
    img: time,
  },
  {
    name: 'email',
    text: 'Email',
    details: 'contact@logistics.com',
    img: email,
  },
  {
    name: 'call',
    text: 'Call Us',
    details: '(00) 112 365 489',
    img: call,
  },
];

export const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Pages',
    link: '/pages',
  },
  {
    name: 'Project',
    link: '/projects',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

export const socialLinks = [
  {
    name: 'Instagram',
    link: 'https://www.linkedin.com/',
    icon: instagram,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: facebook,
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com/',
    icon: twitter,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/',
    icon: linkedin,
  },
];

export const serviceLinks = [
  {
    name: 'service1',
    header: 'Sea Transport Services',
    text: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: service1,
  },
  {
    name: 'service2',
    header: 'Warehousing Services',
    text: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: service2,
  },
  {
    name: 'service3',
    header: 'Air Fright Services',
    text: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: service3,
  },
  {
    name: 'service4',
    header: 'Local Shipping Services',
    text: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: service4,
  },
];
