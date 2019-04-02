import { ILandingProps } from "./Sections/Landing";
import { IIntroAndSkillsProps } from "./Sections/IntroAndSkills";
import { IRecentWorkProps, ILink } from "./Sections/RecentWork";
import { ICompaniesProps } from "./Sections/Companies";
import { IReferralsProps } from "./Sections/Referrals";

import computers from './assets/Computer graphic.png';
import me from './assets/0.jpeg';
import frontendIcon from './assets/frontend.png';
import backendIcon from './assets/backend.png';
import miscIcon from './assets/Misc icon_ .jpg';
import familyStoryMain from './assets/landing.png';
import rewMain from './assets/REW_homepage.jpg';
import overstockLogo from './assets/overstock.png';
import tcnLogo from './assets/TCN.png';
import byuLogo from './assets/BYU.png';
import devMtnLogo from './assets/devmountain.logo.words.png';
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
  img1aria: 'Picture of Stuart Harper',
  img2url: computers,
  img2aria: 'Cool picture of coding'
}

export const codeIntroAndSkillsData: IIntroAndSkillsProps = {
  title: 'This is a test intro',
  text: 'Lorem ipsum dolor sit amet, dico assentior vix ei. An habemus apeirian hendrerit vis. Ei gloriatur inciderint est, posse definitionem cu sed. Augue omnium cu vim. Cu solum possit mea, te integre minimum mel, ea quo meis fastidii. \nNo eum elit nusquam perpetua, cu nec sale eirmod. Ad rebum saepe laoreet mei, labore eirmod efficiantur mei at, ex quo autem timeam maluisset. Sit eu dicant altera, partem adolescens mea te, id lorem vocibus pro. Ne pri agam doctus nostrum. Id dicant vidisse maiestatis pro, tamquam docendi reformidans in nam. Ea pri sumo nominavi vituperata.',
  skillSetArr: [
    {
      imgUrl: frontendIcon,
      imgAria: 'test 1',
      title: 'test 1',
      description: 'test 1',
      mainSkillDesc: 'test 1',
      mainSkillText: 'test 1',
      toolsDesc: 'test 1',
      toolsArr: [
        '1',
        '2',
        '3',
      ],
    },
    {
      imgUrl: backendIcon,
      imgAria: 'test 2',
      title: 'test 2',
      description: 'test 2',
      mainSkillDesc: 'test 2',
      mainSkillText: 'test 2',
      toolsDesc: 'test 2',
      toolsArr: [
        '1',
        '2',
        '3',
      ],
    },
    {
      imgUrl: miscIcon,
      imgAria: 'Test 3',
      title: 'Test 3',
      description: 'Test 3',
      mainSkillDesc: 'Test 3',
      mainSkillText: 'Test 3',
      toolsDesc: 'Test 3',
      toolsArr: [
        '1',
        '2',
        '3',
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