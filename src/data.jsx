import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/cronytech.png';
import Work2 from './assets/kaayamo.jpg';
import Work3 from './assets/prashnottar.png';
import Work4 from './assets/saaplab.png';
import Work5 from './assets/userquick.png';
import Work6 from './assets/musicplayer.png';
import Work7 from './assets/flutterapp.png';
import Work8 from './assets/textutils.png'

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav_icon' />,
    path: '/MyPortfolio/home',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav_icon' />,
    path: '/MyPortfolio/About',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav_icon' />,
    path: '/MyPortfolio/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav_icon' />,
    path: '/MyPortfolio/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: '<b>Jayant</b>',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: '<b>Singh</b>',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '<b>23 Years</b>',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: '<b>Indian</b>',
  },

  // {
  //   id: 5,
  //   title: 'Freelance : ',
  //   description: 'Available',
  // },

  {
    id: 6,
    title: 'Address : ',
    description: '<b>Jaipur, Rajasthan</b>',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '<b>+919928311076</b>',
  },

  {
    id: 8,
    title: 'Email : ',
    description: '<b>jayantsingh331@gmail.com</b>',
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'jayant1139',
  // },

  {
    id: 10,
    title: 'Langages : ',
    description: '<b>English, Hindi</b>',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '8+',
    title: 'Completed <br /> Projects',
  },
  {id:3,
  no:'3+',
  title:'Completed <br/> Internships',
},
 ];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'March 2022 - June 2022',
    title: 'ReactJs Developer <span> CronyTechnovest (OPC) Pvt Ltd </span>',
    desc: '•	Developed a secure platform connecting cybersecurity professionals and clients, ensuring complete anonymity of data. <br/>•	Utilized <b>React and Material-UI</b> to create over <b>30+</b> new web pages, enhancing functionality and improving the user experience',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'January 2022 - March 2022',
    title: 'Frontend Developer <span> Kaay Amo  </span>',
    desc: '•	Developed an inclusive E-learning platform using <b>React and Material-UI</b>, enabling students from diverse backgrounds to access various learning programs and explore their future opportunities.<br/> •	Created and implemented <b>18+</b> new webpages, leveraging React and Material-UI, to improve functionality and user experience on the platform, while also effectively identifying and fixing bugs for a seamless learning environment.'
    ,
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'August 2021 - October 2021',
    title: 'Full Stack Engineer <span> Prashnottar Pvt Ltd </span>',
    desc: '•	Developed and delivered over <b>15+</b> user-friendly web pages utilizing HTML, CSS, and JavaScript, resulting in an enhanced user experience.<br/>•	Integrated the Razorpay payment gateway, ensuring seamless and secure online transactions for users.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Bachelor Degree <span> IIT Roorkee </span>',
    desc: '<b>Major Specialization:</b> Engineering Physics<br/> <b>Minor Specialization:</b> Management Studies',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'Senior Secondary <span> Saint Soldier Public School (CBSE) </span>',
    desc: '<b>Specialization:</b> Physics, Chemistry, Maths and Informatic Practices ,<br/> Percentage: 78.2%',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016',
    title: 'Matriculate <span> Saint Soldier Public School (CBSE) </span>',
    desc: 'CGPA: 9.4',
  },
];

export const skills = [
  {
    id: 1,
    title: 'ReactJs',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '75',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Html',
    percentage: '60',
  },

  {
    id: 5,
    title: 'Jquery',
    percentage: '60',
  },

  {
    id: 6,
    title: 'Mysql',
    percentage: '65',
  },

  {
    id: 7,
    title: 'Php',
    percentage: '55',
  },
  {
    id:8,
    title:'C++',
    percentage:'80',
  }
];

export const portfolio = [
  {
    id: 1,
    img: Work7,
    title: 'Flutter Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project :  ',
        desc: 'Task Manager',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Flutter',
      },
      {
        icon: <FiUser />,
        title: 'Description :  ',
        desc: 'Implemented CRUD Operation and Notifications',
      },
      
      {
        icon: <FiExternalLink />,
        title: 'Live Demo: ',
        linkdemo:'https://hd-testing-1aa93.firebaseapp.com/',

        desc: 'https://hd-testing-1aa93.firebaseapp.com/',
      },
    ],
  },

  {
    id: 2,
    img: Work1,
    title: 'Dashboard',
   
    details: [
      {
        icon: <FiFileText />,
        title: 'Project :  ',
        desc: 'HackersDeal',
      },
      {
        icon: <FiUser />,
        title: 'Company :  ',
        desc: 'CronyTechnovest (OPC)',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live Demo: ',
        linkdemo:'https://hd-testing-1aa93.firebaseapp.com/',
        desc: 'https://hd-testing-1aa93.firebaseapp.com/',
      },
    ],
  },

  {
    id: 3,
    img: Work2,
    title: 'Kaay Amo Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Role : ',
        desc: 'ReactJs Developer',
      },
      {
        icon: <FiUser />,
        title: 'Company : ',
        desc: 'Kaay Amo',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'https://hd-testing-1aa93.firebaseapp.com/',
      // },
    ],
  },

  {
    id: 4,
    img: Work3,
    title: 'Full Stack Engineer',
    
    details: [
      {
        icon: <FiFileText />,
        title: 'Role : ',
        desc: 'Website Developer',
      },
      {
        icon: <FiUser />,
        title: 'Company : ',
        desc: 'Prashnottar Pvt Ltd',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Javascript, Mysql, Php',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live Demo: ',
        linkdemo:'https://prashnottar.in/u/index_Jayant.php',
        desc: 'https://prashnottar.in/u/index_Jayant.php',
      },
    ],
  },

  {
    id: 5,
    img: Work4,
    title: 'APP Lab',
   
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Applied Plasmonic and Photonic Lab Website',
      },
      {
        icon: <FiUser />,
        title: 'Supervisor : ',
        desc: 'Prof. Sachin Kumar Srivastav',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live Demo: ',
        linkdemo:'https://jayant1139.github.io/saaplab/',
        desc: 'https://jayant1139.github.io/saaplab/',
      },
    ],
  },

  {
    id: 6,
    img: Work5,
    title: 'API Project',
  
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'UserQuick',
      },
      {
        icon: <FiFileText />,
        title: 'Description: ',
        desc: 'retrieved data from mock api and implemented search functionlaity',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live Demo: ',
        linkdemo:'https://jayant1139.github.io/userquick/',
        desc: 'https://jayant1139.github.io/userquick/',
      },
    ],
  },
  {
    id: 7,
    img: Work8,
    title: 'TextUtils ',
   
    details: [
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs',
      }, 
      {
        icon: <FiFileText />,
        title: 'Description: ',
        desc: 'converts text into uppercase, lowercase, count words and copy.',
      },
     
      
      {
        icon: <FiExternalLink />,
        title: 'Live Demo: ',
        linkdemo:'https://github.com/jayant1139/text-utilities',
        desc: 'https://github.com/jayant1139/text-utilities',
      },
    ],
  },
  {
    id: 8,
    img: Work6,
    title: 'Music Player ',
   
    details: [
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Javascript',
      }, 
      {
        icon: <FiFileText />,
        title: 'Description: ',
        desc: 'used concept of object for smooth functioning',
      },
     
      
      {
        icon: <FiExternalLink />,
        title: 'Live Demo: ',
        linkdemo:'https://jayant1139.github.io/Music_Player/',
        desc: 'https://jayant1139.github.io/Music_Player/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
