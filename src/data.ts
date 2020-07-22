import { ILandingProps } from "./Sections/Landing";
import { IIntroAndSkillsProps } from "./Sections/IntroAndSkills";
import { IRecentWorkProps, ILink } from "./Sections/RecentWork";
import { ICompaniesProps } from "./Sections/Companies";
import { IReferralsProps } from "./Sections/Referrals";

import computers from './assets/Computer graphic.png';
import me from './assets/0.jpeg';
import frontendIcon from './assets/frontend.png';
import reactLogo from './assets/reactLogo.png';
import backendIcon from './assets/backend.png';
import nodejsLogo from './assets/nodejsLogo.png';
import miscIcon from './assets/Misc icon_ .jpg';
import teamsLogo from './assets/teamsLogo.jpeg';
import familyStoryMain from './assets/landing.png';
import rewMain from './assets/REW_homepage.jpg';
import pdsLogo from './assets/PDSLogo-1.jpg';
import overstockLogo from './assets/overstock.png';
import tcnLogo from './assets/TCN.png';
import byuLogo from './assets/BYU.png';
import devMtnLogo from './assets/devmountain.logo.words.png';
import afrlLogo from './assets/AFRL.jpeg';
import imftLogo from './assets/imft_logo.png';
import ktechLogo from './assets/ktech.png';
import jacob from './assets/JacobSiebach.jpeg';
import paul from './assets/PaulDavis.jpeg';
import ChurchOfJesusChristLogo from './assets/ChurchOfJesusChrist.png';
import facebookIcon from './assets/facebook.png';
import devMountainIcon  from './assets/devmountain.logo.png';
import emailIcon from './assets/email.png';
import gitLabIcon from './assets/gitlab.png';
import resumeIcon from './assets/resume.png';
import linkedInIcon from './assets/linkedIn.png';
import githubIcon from './assets/github.png';

export const codeLandingData: ILandingProps = {
  title: 'Full-Stack Web Developer on the Cutting Edge of Code',
  subtitle: 'I build and code beautifully simple things, and I love what I do.',
  img1url: me,
  img1aria: 'Stuart Harper',
  img2url: computers,
  img2aria: 'coding in multiple accessible formats'
}

export const codeIntroAndSkillsData: IIntroAndSkillsProps = {
  title: 'Applying the tools of advanced physics and engineering to building websites.',
  text: 'Thank you for visiting my website. I have been working for the last fifteen years to understand and perfect my craft, and to apply all the skills I have gained along the way. I work to serve others desiring to connect online, whether it be for business or to serve those in need. I started as a physicist, and learned there how to research, learn, implement advanced concepts, and then share those concepts in relatable terms. From there I went into engineering, where I learned that care and craftsmanship can make the difference between a usable product and a great one. And now, I have brought it all together in coding, and I have never been happier. Below is just a sample of some of my skills and projects for you to see.',
  skillSetArr: [
    {
      imgUrl: frontendIcon,
      imgAria: 'Front-End',
      title: 'Front-End',
      description: 'As a front-end developer I seek to make a beautiful and effective user interface. My main tool of choice is',
      mainSkillLogo: reactLogo,
      mainSkillDesc: 'React.JS',

      mainSkillText: 'I have been coding with React since 2018, and I have found it to be a flexible and versatile tool to create websites.',
      toolsDesc: 'I am also proficient in the following tools:',
      toolsArr: [
        'CSS',
        'HTML',
        'JavaScript ES9',
        'JSX',
        'TSX',
        'TypeScript',
        '-',
        'Accessability Training',
        'Angular',
        'Axios',
        'Babble',
        'Chart.js',
        'Formik',
        'I18n Training',
        'Lodash',
        'NPM',
        'Node Modules',
        'React Hooks',
        'React-Router',
        'Redux',
        'Redux-Promise-Middleware',
        'Redux Sagas',
        'Storybook',
        'Vue',
        'Webpack',
        'Yarn',
        'Yup',
        '-',
        'Abstract',
        'CSS-Grid',
        'Flexbox',
        'Material-UI',
        'PostCss',
        'Styled Components',
      ],
    },
    {
      imgUrl: backendIcon,
      imgAria: 'Back-End',
      title: 'Back-End',
      description: 'My goal in writing back-end code is to make a clean and secure api with efficient data handling. I am most proficient in',
      mainSkillLogo: nodejsLogo,
      mainSkillDesc: 'Node.JS',
      mainSkillText: 'Though I can handle the mental load of switching languages and syntax, I find my work to be accelerated by having everything in one language.',
      toolsDesc: 'In addition to this I have the following skills at my disposal:',
      toolsArr: [
        'C++',
        'Deno',
        'Go',
        'Java Springboot',
        'LabView',
        'MatLab',
        'Mathmatica',
        'mySQL',
        'PostgreSQL',
        'SQL Tabs',
        '-',
        'APIs',
        'AWS Gateway API',
        'AWS Lambda',
        'AWS Cloudwatch',
        'Google API',
        'Heroku Databases',
        'Postman',
        'Sharepoint API',
        'Workday API',
        'Zillow API',
        '-',
        'Auth0',
        'Bazel',
        'Digital Ocean',
        'Docker',
        'Express.Js',
        'Next.Js',
        'Google Protobuffs',
        'GPRC',
        'Massive',
        'NodeMailer',
        'OAuth',
      ],
    },
    {
      imgUrl: miscIcon,
      imgAria: 'Additional Skills',
      title: 'Additional Skills',
      description: `As a software engineer there are many different skills needed to get the job done. One of my favorites is`,
      mainSkillLogo: teamsLogo,
      mainSkillDesc: 'Microsoft Teams',
      mainSkillText: 'Being a remote developer, I rely on Teams to stay connected. It is my favorite collaboration tool at this time due to its ease of use and streamlined integration with outlook.',
      toolsDesc: 'Here are some of my other misc skills',
      toolsArr: [
        'Asana',
        'Azure',
        'Azure Active Directory',
        'Azure Devops',
        'Bitbucket',
        'Jira',
        'GitLab',
        'Git',
        'Github',
        'VS Code',
        '-',
        'Discord',
        'Microsoft Office',
        'Slack',
        'VS Code Liveshare',
        'Webex',
        'Yammer',
        'Zoom',
        '-',
        'Running Code Reviews',
        'Running Meetings',
        'Teaching/Mentoring',
        'plus...',
        'an abundance of other interpersonal soft skills.'
      ],
    },
  ]
}

export const codeRecentWorkData: IRecentWorkProps = {
  title: 'My Recent Work',
  description: 'Here are some of my recent coding projects. Want to see more?',
  recentWorkItems: [
    {
      title: 'project 1',
      description: 'project 1 desc',
      links: [
        {
          imgUrl: 'test url',
          link: 'link url',
          alt: ''
        }
      ],
      briefDesc: 'Family Story: an online immersive storytelling tool.',
      mainImgUrl: familyStoryMain,
      ariaLabel: 'family-story.online',
      images: [
        {
          imgUrl: familyStoryMain,
          ariaLabel: 'img 1 aria label',
          description: 'desc'
        }
      ],
    },
    {
      title: 'project 2',
      description: 'project 2 desc',
      links: [
        {
          imgUrl: 'test url',
          link: 'link url',
          alt: ''
        }
      ],
      briefDesc: 'Real Estate Watchdog: an investment analysis tool.',
      mainImgUrl: rewMain,
      ariaLabel: 'realestate-watchdog.com',
      images: [
        {
          imgUrl: 'img 2 url',
          ariaLabel: 'img 2 aria label',
          description: 'desc'
        }
      ],
    },
    {
      title: 'project 3',
      description: 'project 3 desc',
      links: [
        {
          imgUrl: 'test url',
          link: 'link url',
          alt: ''
        }
      ],
      briefDesc: '',
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 3 url',
          ariaLabel: 'img 3 aria label',
          description: 'desc'
        }
      ],
    },
    {
      title: 'project 4',
      description: 'project 4 desc',
      links: [
        {
          imgUrl: 'test url',
          link: 'link url',
          alt: ''
        }
      ],
      briefDesc: '',
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 4 url',
          ariaLabel: 'img 4 aria label',
          description: 'desc'
        }
      ],
    },
    {
      title: 'project 1',
      description: 'project 1 desc',
      links: [
        {
          imgUrl: 'test url',
          link: 'link url',
          alt: ''
        }
      ],
      briefDesc: '',
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 1 url',
          ariaLabel: 'img 1 aria label',
          description: 'desc'
        }
      ],
    },
    {
      title: 'project 1',
      description: 'project 1 desc',
      links: [
        {
          imgUrl: 'test url',
          link: 'link url',
          alt: ''
        }
      ],
      briefDesc: '',
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 1 url',
          ariaLabel: 'img 1 aria label',
          description: 'desc'
        }
      ],
    }
  ]
}

export const codeCompaniesData: ICompaniesProps = {
  header: 'I am proud to have coded for the following companies:',
  companies: [
    {
      name: 'The Church of Jesus Christ of Latter-day Saints',
      imgUrl: ChurchOfJesusChristLogo,
      link: 'https://www.churchofjesuschrist.org/',
    },
    {
      name: 'PDS - People, Data and Solutions',
      imgUrl: pdsLogo,
      link: 'https://www.pdsinc.com/',
    },
    {
      name: 'Overstock.com',
      imgUrl: overstockLogo,
      link: 'https://www.overstock.com/',
    },
    {
      name: 'TCN inc.',
      imgUrl: tcnLogo,
      link: 'https://www.tcn.com/',
    },
    {
      name: 'IM Flash Technologies (now Micron)',
      imgUrl: imftLogo,
      link: 'http://www.imflash.com/',
    },
    {
      name: 'DevMountain Student Developers',
      imgUrl: devMtnLogo,
      link: 'https://devmountain.com/',
    },
    {
      name: 'Brigham Young University Physics Department',
      imgUrl: byuLogo,
      link: 'https://www.physics.byu.edu/',
    },
    {
      name: 'KTech Engineering',
      imgUrl: ktechLogo,
      link: 'http://ktech-eng.com/',
    },
    {
      name: 'Kirtland Air Force Base Space Vehicles Directorate',
      imgUrl: afrlLogo,
      link: 'https://www.kirtland.af.mil/Units/AFRL-Space-Vehicles-Directorate/',
    }
  ]
};

export const codeReferralsData: IReferralsProps = {
  title: 'Testimonials',
  subtitle: 'I am grateful to these people I have worked with who have vouched for my abilities...',
  referrals: [
    {
      photoUrl: jacob,
      text: [
        'One of the most valuable assets attributable to Stuart is his character. He has always been a man of integrity. At work or play, he consistently exhibits an attitude of kindness and humility, traits often difficult to find in the industry. Not only that, he is patient with others, which is essential during communication across teams, be it between developers, project management, or the business owners.',
        'His main advantage is in his ability to think. Over the decades of my software experience, I have known many programmers who are given a task and immediately begin writing code. Stuart has the intelligence to step back, analyze the problem at hand, gather information, and then design an effective solution. This makes him a software engineer and not just a “coder”.',
        'If you want someone who will work hard and learn fast, Stuart is your man. If you need someone who can disassociate complex problems into workable chunks, and then see those chunks developed to completion, Stuart is your man. If you hope to hire someone who can work well with all types of people in various situations, then Stuart Harper is your man.',
      ],
      name: 'Jacob Siebach',
      title: 'Software Engineer',
      company: 'Brigham Young University',
    },
    {
      photoUrl: paul,
      text: [
        'While at DevMountain, Stuart impressed me with his dedication to learning and his ability to explain complex concepts to other students. Stuart demonstrated the ability to drink from a firehose of information and then turn around and produce well-thought-out and executed apps that clearly demonstrated his grasp of the concepts.',
      ],
      name: 'Paul Davis',
      title: 'CEO & Co-Founder',
      company: 'MyTourGuide',
    }
  ]
};

export const socialLinks: ILink[] = [
  {
    imgUrl: githubIcon,
    link: 'https://github.com/Sharper044/',
    alt: 'Github Profile',
  },
  {
    imgUrl: linkedInIcon,
    link: 'https://www.linkedin.com/in/sharper044/',
    alt: 'LinkedIn Profile',
  },
  {
    imgUrl: resumeIcon,
    link: 'https://docs.google.com/document/d/1koUHIEwcvb6zeUyyuXvG7sEqG6y3wc6c8b2PVifcQcw/edit?usp=sharing',
    alt: 'Resume',
  },
  {
    imgUrl: gitLabIcon,
    link: 'https://gitlab.com/Sharper044?nav_source=navbar',
    alt: 'GitLab Profile',
  },
  {
    imgUrl: devMountainIcon,
    link: 'https://www.youracclaim.com/badges/c9590068-c12f-4c5a-b1ac-1660d861266a/public_url',
    alt: 'DevMountain Badge',
  },
  {
    imgUrl: facebookIcon,
    link: 'https://www.facebook.com/stuart.harper.750?ref=bookmarks',
    alt: 'Facebook Profile',
  },
  {
    imgUrl: emailIcon,
    link: 'mailto:stuartharper044@gmail.com',
    alt: 'Email',
  },
];