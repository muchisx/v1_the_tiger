/* eslint-disable max-len */
import { ArrowRight, ShoppingBag } from '@styled-icons/fluentui-system-filled';
import { css } from 'styled-components';
import { Props as SplitContentProps } from '../../../components/SplitContent/SplitContent.types';
import { CardStyled } from '../../../components/Card/Card.styles';
import { ButtonsContainer } from '../../../components/SplitContent/SplitContent.styles';

const customStyles = css`
  --content-top-offset: 24%;
  position: relative;
  padding-block: 10rem;
  background-color: var(--body-bg-color-secondary);

  .split-content__first {
    position: sticky;
    top: var(--content-top-offset);
    height: fit-content;

    ${ButtonsContainer} {
      margin-top: 0;
    }
  }

  ${CardStyled} {
    position: sticky;
    top: calc(var(--content-top-offset) + (var(--order) * 2%));
  }

  @media only screen and (max-width: 768px) {
    --content-top-offset: 8%;
    padding-block: 8rem;
    overflow: visible;

    .split-content__first {
      position: static;
    }
  }
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
      HeaderIcon: ShoppingBag,
      headerTags: [
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
      bodyText: {
        children:
          'Your website is the face of your business, which is why you need to invest as much energy into it as you do into the look and feel. That is why I focus on creating websites that are adaptable and customer-focused so they perfectly suit the needs of your business.',
      },
    },
    {
      id: 2,
      headerHeading: 'SHOPIFY DEVELOPMENT',
      HeaderIcon: ShoppingBag,
      headerTags: [
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
      bodyText: {
        children:
          'Your website is the face of your business, which is why you need to invest as much energy into it as you do into the look and feel. That is why I focus on creating websites that are adaptable and customer-focused so they perfectly suit the needs of your business.',
      },
    },
    {
      id: 3,
      headerHeading: 'SHOPIFY DEVELOPMENT',
      HeaderIcon: ShoppingBag,
      headerTags: [
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
      bodyText: {
        children:
          'Your website is the face of your business, which is why you need to invest as much energy into it as you do into the look and feel. That is why I focus on creating websites that are adaptable and customer-focused so they perfectly suit the needs of your business.',
      },
    },
    {
      id: 4,
      headerHeading: 'SHOPIFY DEVELOPMENT',
      HeaderIcon: ShoppingBag,
      headerTags: [
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
      bodyText: {
        children:
          'Your website is the face of your business, which is why you need to invest as much energy into it as you do into the look and feel. That is why I focus on creating websites that are adaptable and customer-focused so they perfectly suit the needs of your business.',
      },
    },
  ],
};

const homeServices = {
  leftContent,
  rightContent,
  customStyles,
};

export default homeServices;
