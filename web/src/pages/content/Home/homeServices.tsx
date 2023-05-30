import { ArrowRight, Laptop } from '@styled-icons/fluentui-system-filled';
import { css } from 'styled-components';
import { Props as SplitContentProps } from '../../../components/SplitContent/SplitContent.types';

const customStyles = css`
  background-color: var(--body-bg-color-secondary);
`;

const leftText = (
  <>
    I specialise in offering bespoke web design and Webflow development services to small and big businesses alike. My
    aim is to help businesses establish a strong online presence and connect with their target audience effectively.
  </>
);

const leftHeading = (
  <>
    <span className="highlight-quaternary">HOW CAN </span>
    <span className="highlight-primary">I HELP</span>
  </>
);

const leftContent: SplitContentProps['leftContent'] = {
  topButton: {
    role: 'link',
    to: '/services',
    variant: 'secondary',
    text: 'Services',
  },
  leftHeading: {
    text: leftHeading,
    fontSize: '4.8rem',
  },
  leftButtons: [
    {
      id: 1,
      role: 'link',
      to: '/services',
      text: 'Read more',
      variant: 'secondary',
      Icon: ArrowRight,
    },
    {
      id: 2,
      role: 'link',
      to: 'https://github.com/muchisx',
      text: 'Contact',
      variant: 'secondary',
      Icon: ArrowRight,
    },
  ],
  leftTexts: [
    {
      id: 1,
      children: leftText,
      className: 'highlight-quaternary',
    },
  ],
};

const rightContent: SplitContentProps['rightContent'] = {
  cards: [
    {
      id: 1,
      headerHeading: 'SHOPIFY DEVELOPMENT',
      HeaderIcon: Laptop,
      tags: [
        {
          id: 1,
          text: 'Shopify',
          variant: 'primary',
        },
        {
          id: 2,
          text: 'Development',
          variant: 'tertiary',
        },
        {
          id: 3,
          text: 'Custom',
          variant: 'quaternary',
        },
      ],
    },
  ],
};

const homeServices = {
  leftContent,
  rightContent,
  customStyles,
};

export default homeServices;
