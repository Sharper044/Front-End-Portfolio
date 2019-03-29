import { ILandingProps } from "./Sections/Landing";
import { IIntroAndSkillsProps } from "./Sections/IntroAndSkills";
import { IRecentWorkProps } from "./Sections/RecentWork";
import { ICompaniesProps } from "./Sections/Companies";

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

export const codeLandingData: ILandingProps = {
  title: 'Code Page Title',
  subtitle: 'Code page subtitle',
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
          link: 'link url'
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
          link: 'link url'
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
          link: 'link url'
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
          link: 'link url'
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
          link: 'link url'
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
          link: 'link url'
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
}