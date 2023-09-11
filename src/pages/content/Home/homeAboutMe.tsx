// Dependencies
import { css } from 'styled-components';
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
// Assets
import svgShape from '@assets/svgs/abstract-1.svg';
import profilePic from '@assets/images/profile-pic.jpeg';
// Utils
import { getMediaQueryValue } from '@utils';
// Types
import { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';

const customStyles = css`
  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    padding-top: 80px;
  }
`;

const leftContent: SplitContentProps['leftContent'] = {
  topTag: {
    variant: 'tertiary',
    children: 'About Me',
  },
  buttonsLabel: 'Socials',
  leftButtons: [
    {
      buttonRole: 'link',
      newTab: true,
      text: 'LinkedIn',
      variant: 'quaternary',
      $keyId: crypto.randomUUID(),
      to: 'https://www.linkedin.com/in/miguelangelpro/',
    },
    {
      buttonRole: 'link',
      newTab: true,
      text: 'GitHub',
      variant: 'quaternary',
      $keyId: crypto.randomUUID(),
      to: 'https://github.com/muchisx',
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
    <span style={{ display: 'block', marginBottom: '0.6rem' }}>I&#39;m glad you&#39;re here!</span>
    My name is Miguel Ángel, and as a commited and imaginative freelance Web Developer, my goal is to develop projects
    that I can take pride in. I am a member Shopify Partners Program, adept in React Development, and I excel at
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
      fontWeight: 500,
      fontSize: '1.8rem',
      children: textOne,
      $keyId: crypto.randomUUID(),
    },
    {
      children: textTwo,
      $keyId: crypto.randomUUID(),
    },
  ],
  rightButtons: [
    {
      to: '/about',
      buttonRole: 'link',
      Icon: ArrowRight,
      variant: 'secondary',
      text: 'Get the full story',
      $keyId: crypto.randomUUID(),
    },
  ],
};

const homeAboutMe: SplitContentProps = {
  customStyles,
  leftContent,
  rightContent,
};

export default homeAboutMe;
