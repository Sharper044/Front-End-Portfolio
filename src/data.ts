import { ILandingProps } from "./Sections/Landing";
import { IIntroAndSkillsProps } from "./Sections/IntroAndSkills";
import { IRecentWorkProps, ILink } from "./Sections/RecentWork";
import { ICompaniesProps } from "./Sections/Companies";
import { IReferralsProps } from "./Sections/Referrals";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

import computers from './assets/Computer graphic.png';
import me from './assets/0.jpeg';
import frontendIcon from './assets/frontend.png';
import reactLogo from './assets/reactLogo.png';
import backendIcon from './assets/backend.png';
import nodejsLogo from './assets/nodejsLogo.png';
import miscIcon from './assets/Misc icon_ .jpg';
import teamsLogo from './assets/teamsLogo.jpeg';
import familyStoryMain from './assets/landing.png';
import fs1 from './assets/FS1.png';
import fs2 from './assets/Story view 1.png';
import fs3 from './assets/Story view 2.png';
import rewMain from './assets/REW_homepage.jpg';
import rew1 from './assets/REW_homepage_full.jpg';
import rew2 from './assets/REW_About.jpg';
import rew3 from './assets/REW_Newsearch.jpg';
import rew4 from './assets/REW_Saved.jpg';
import rew5 from './assets/REW_Results1.jpg';
import rew6 from './assets/REW_Results2.jpg';
import rew7 from './assets/REW_Email.jpg';
import thesis1 from './assets/DM3 Static Test.jpg';
import thesis2 from './assets/Nonlinear_Demo.jpg';
import thesis4 from './assets/Thesis_Map.jpg';
import thesis5 from './assets/thesis_pdf.jpg';
import thesis6 from './assets/thesis_pdf2.jpg';
import thesis7 from './assets/thesis_PDF3.jpg';
import thesis8 from './assets/ASA_Article.jpg';
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
        'Cypress IO',
        'Formik',
        'History',
        'I18n Training',
        'Jasmine',
        'Jest',
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
        'MDBootstrap',
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
        'RESTful APIs',
        'AWS Gateway API',
        'AWS Lambda',
        'AWS Cloudwatch',
        'Firebase',
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
        'AutoCad',
        'Azure',
        'Azure Active Directory',
        'Azure Devops',
        'Bitbucket',
        'Jira',
        'Fusion 360',
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
      title: 'Family Story',
      description: 'Group Project - Role: Project Lead & Backend Team Lead, Built March 2018, The purpose of Family Story is to let users build and create immersive family story experiences. It does this by having a person import dates, events, photos, audio, and locations into a story and the events that are in that story.',
      links: [
        {
          imgUrl: '',
          Icon: WebIcon,
          link: 'http://www.family-story.online/',
          alt: 'Website'
        },
        {
          imgUrl: '',
          Icon: GitHubIcon,
          link: 'https://github.com/family-story/family-story',
          alt: 'GitHub'
        }
      ],
      briefDesc: 'Family Story: an online immersive storytelling tool.',
      mainImgUrl: familyStoryMain,
      ariaLabel: 'family-story.online',
      images: [
        {
          imgUrl: familyStoryMain,
          ariaLabel: 'Landing Page',
          description: 'Landing Page - Users here are prompted to log in so they can create their stories.'
        },
        {
          imgUrl: fs1,
          ariaLabel: 'Home Page for Family Story',
          description: 'Home Page for Family Story - Here users can select which stories they want to view, as well as add or edit stories.'
        },
        {
          imgUrl: fs2,
          ariaLabel: 'Story View',
          description: 'Story View - The site then walks the users through each event of the story, showing them when/where they happened and letting them experience it.'
        },
        {
          imgUrl: fs3,
          ariaLabel: 'Story View Continued',
          description: 'Story View Continued - You can even view pictures or hear audio concerning each event.'
        }
      ],
    },
    {
      title: 'REAL ESTATE WATCHDOG',
      description: "Built February 2018, the purpose of Real Estate Watchdog is to provide a tool to real estate investors/agents to alert them to the best investment properties currently on the market. It watches the market, so you don't have to. Major technologies and languages include: Javascript, HTML, CSS, React/JSX, Redux, Auth0 , Chart.JS, Cron, Zillow API, Express.JS, mySQL, Axios, Massive, React-Router, Redux-Promise-Middleware, NodeMailer, and Digital Ocean",
      links: [
        {
          imgUrl: '',
          Icon: WebIcon,
          link: 'http://www.realestate-watchdog.com',
          alt: 'Website'
        },
        {
          imgUrl: '',
          Icon: GitHubIcon,
          link: 'https://github.com/Sharper044/RealEstateWatchdog',
          alt: 'GitHub'
        }
      ],
      briefDesc: 'Real Estate Watchdog: an investment analysis tool.',
      mainImgUrl: rewMain,
      ariaLabel: 'realestate-watchdog.com',
      images: [
        {
          imgUrl: rew1,
          ariaLabel: 'REW Homepage',
          description: 'REW Homepage - Here the user enters the site and signs in.'
        },
        {
          imgUrl: rew2,
          ariaLabel: 'REW About Page',
          description: 'REW About Page - This about page describes the site, and prompts the user to create a new search. There is also a responsive nav bar along the top.'
        },
        {
          imgUrl: rew3,
          ariaLabel: 'REW New Search',
          description: 'REW New Search - Here, new searches can be created, and saved searches viewed, edited, and deleted. The search takes in the following parameters: location, cash amount for purchase, whether the home will be purchased in cash or a loan, and if there is a loan, are you planning on moving in first, as well as the interest rate.'
        },
        {
          imgUrl: rew4,
          ariaLabel: 'REW Saved Search List',
          description: 'REW Saved Search List - The user can select to have this search ran automatically every two weeks and have the results emailed to them. The user can also save the search to be used at a future time.'
        },
        {
          imgUrl: rew5,
          ariaLabel: 'REW Results View 1',
          description: 'REW Results View 1 - The search runs by first pinging a database of homes for sale, and filters out the ones the user cannot afford.'
        },
        {
          imgUrl: rew6,
          ariaLabel: 'REW Results View 2',
          description: 'REW Results View 2 - Individual properties can then be clicked to see more details or even to see the property itself on Zillow.'
        },
        {
          imgUrl: rew7,
          ariaLabel: 'REW Email',
          description: 'REW Email - The user can request to have the data sent to them in an email and also to receive automatic, bi-weekly emails.'
        }
      ],
    },
    {
      title: 'Statistical Analysis of Noise From Solid Rocket Motors-MatLab December 2012',
      description: 'BYU Physics Senior Thesis - Programmed in MatLab. It is a statistical analysis of noise data from various-sized solid propellant rocket motors (0.13m to 1.22m). Non-Gaussian features of the data were explored by calculating probability density functions (PDF) of the data, standard deviation, skewness, and kurtosis. This was the first time this type of analysis was done for both the pressure waveform and its time derivative. This revealed the formation of acoustic shocks within the noise. Presented these results at the Acoustical Society of America.',
      links: [
        {
          imgUrl: '',
          Icon: DescriptionOutlinedIcon,
          link: 'http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.724.4868&rep=rep1&type=pdf&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B8ruR5oo3Tzq82Pzut86LgA%3D%3D',
          alt: 'Thesis'
        },
        {
          imgUrl: '',
          Icon: DescriptionOutlinedIcon,
          link: 'http://asa.scitation.org/doi/10.1121/1.3655009?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B8ruR5oo3Tzq82Pzut86LgA%3D%3D',
          alt: 'ASA Citation'
        }
      ],
      briefDesc: 'Statistical Analysis of Rocket Noise Program',
      mainImgUrl: thesis1,
      ariaLabel: 'Statistical Analysis of Rocket Noise',
      images: [
        {
          imgUrl: thesis1,
          ariaLabel: 'Rocket test at ATK in Utah',
          description: 'Rocket test at ATK in Utah - Several rocket tests like this one were performed to better understand the damage caused to rockets by acoustic "crackle".'
        },
        {
          imgUrl: thesis2,
          ariaLabel: 'Nonlinear Acoustic Propagation - a wave turning from smooth to more like a sawtooth',
          description: 'Nonlinear Acoustic Propagation - Extremely loud sound waves change shape as they progress due to temperature changes in the wave, making standard analysis impossible.'
        },
        {
          imgUrl: thesis4,
          ariaLabel: 'Normalized map of the microphones',
          description: 'Normalized map of the microphones - A standardized comparison of all microphones in this experiment.'
        },
        {
          imgUrl: thesis5,
          ariaLabel: 'Acoustic PDF created in MatLab',
          description: 'Acoustic PDF created in MatLab - This basically showed the range of loudness in the noise.'
        },
        {
          imgUrl: thesis6,
          ariaLabel: 'Normalized rocket comparison',
          description: 'Normalized rocket comparison - Not much difference can be seen in this between the different rockets using the standard method.'
        },
        {
          imgUrl: thesis7,
          ariaLabel: 'Derivative comparison',
          description: 'Derivative comparison - but by seeing how rapidly the loudness in the noise could change we were able to see the presence of the shockwaves, seen in the black areas on the right of the first two rockets. This also happened to be the two largest rockets in the test.'
        },
        {
          imgUrl: thesis8,
          ariaLabel: 'ASA Article',
          description: 'ASA Article - This is my citation from when I presented at the ASA conference in the rocket noise session.'
        },
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