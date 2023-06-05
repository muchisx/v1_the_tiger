import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import { Props as SplitContentProps } from '../../../components/SplitContent/SplitContent.types';
import profilePic from '../../../assets/images/profile-pic.jpeg';
import svgShape from '../../../assets/svgs/abstract-1.svg';

const leftContent: SplitContentProps['leftContent'] = {
  topButton: {
    role: 'link',
    to: '/about',
    variant: 'tertiary',
    text: 'About Me',
  },
  buttonsLabel: 'Socials',
  leftButtons: [
    {
      id: 1,
      role: 'link',
      to: 'https://www.linkedin.com/in/miguelangelpro/',
      text: 'LinkedIn',
      variant: 'quaternary',
      newTab: true,
    },
    {
      id: 2,
      role: 'link',
      to: 'https://github.com/muchisx',
      text: 'GitHub',
      variant: 'quaternary',
      newTab: true,
    },
  ],
  maskedImageURL: profilePic,
  backgroundShape: {
    url: svgShape,
    rotation: [160, 180],
  },
};

const textOne = (
  <>
    I&#39;m glad you&#39;re here! <br />
    My name is Miguel Ángel, and as a dedicated and imaginative freelance Web Developer, my goal is to develop projects
    that I can take pride in. I am a member Shopify Partners Program, adept at in React Development, and I excel at
    creating digital services that include stunning user interfaces and reliable code.
  </>
);

const textTwo = (
  <>
    Driven by passion for technology and a focus on Shopify and React development, I craft stunning digital experiences
    that deliver real-world value for my clients and their end-users. I place a strong emphasis on collaboration,
    partnering closely with clients to create custom solutions that perfectly meet their needs and exceed their goals.
  </>
);

const rightContent: SplitContentProps['rightContent'] = {
  rightTexts: [
    {
      id: 1,
      children: textOne,
      fontWeight: 500,
    },
    {
      id: 2,
      children: textTwo,
    },
  ],
  rightButtons: [
    {
      id: 1,
      text: 'Get the full story',
      role: 'link',
      to: '/about',
      variant: 'secondary',
      Icon: ArrowRight,
    },
  ],
};

const homeAboutMe = {
  leftContent,
  rightContent,
};

export default homeAboutMe;
