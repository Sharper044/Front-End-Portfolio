import { ILandingProps } from "./Sections/Landing";
import me from './assets/0.jpeg';
import computers from './assets/Computer graphic.png';
import { IIntroAndSkillsProps } from "./Sections/IntroAndSkills";
import { IRecentWorkProps } from "./Sections/RecentWork";
import frontendIcon from './assets/frontend.png';
import backendIcon from './assets/backend.png';
import miscIcon from './assets/Misc icon_ .jpg';

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
  description: 'Here are some of my coding projects. Want to see more?',
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
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 1 url',
          ariaLabel: 'img 1 aria label',
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
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 2 url',
          ariaLabel: 'img 2 aria label',
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
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 3 url',
          ariaLabel: 'img 3 aria label',
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
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 4 url',
          ariaLabel: 'img 4 aria label',
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
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 1 url',
          ariaLabel: 'img 1 aria label',
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
      mainImgUrl: 'img url',
      ariaLabel: 'img label',
      images: [
        {
          imgUrl: 'img 1 url',
          ariaLabel: 'img 1 aria label',
        }
      ],
    }
  ]
}