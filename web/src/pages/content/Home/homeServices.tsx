/* eslint-disable max-len */
import { ArrowRight, ShoppingBag, Molecule, Rocket, Eye } from '@styled-icons/fluentui-system-filled';
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
    My expertise lies in providing reliable web development services and expert Shopify assistance to businesses of all
    sizes. I strive to empower businesses in establishing a strong online presence and effectively engaging their target
    audience.
  </>
);

const leftHeading = (
  <>
    <span className="highlight-quaternary">WAYS I </span>
    <br className="xsm-hidden" />
    <span className="highlight-primary">CAN HELP</span>
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
          'As the face of your business, your website demands equal dedication and investment in both its aesthetics and functionality. This is precisely why I prioritize the development of adaptable, customer-focused websites that align seamlessly with your business needs.',
      },
    },
    {
      id: 2,
      headerHeading: 'REACT DEVELOPMENT',
      HeaderIcon: Molecule,
      headerTags: [
        {
          id: 1,
          text: 'React',
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
          'Utilizing my expertise in web design, along with technical skills in React and extensive CSS knowledge, I am a perfect fit for any custom component development, bug fixing or tweaking existing components to suit your needs.',
      },
    },
    {
      id: 3,
      headerHeading: 'HELPING STARTUPS',
      HeaderIcon: Rocket,
      headerTags: [
        {
          id: 1,
          text: 'Audit',
          variant: 'primary',
        },
        {
          id: 2,
          text: 'Identity',
          variant: 'tertiary',
        },
        {
          id: 3,
          text: 'Development',
          variant: 'quaternary',
        },
      ],
      bodyText: {
        children:
          "Starting up a business comes with its fair share of challenges, but your website should not be one of them. That's where I come in. I provide thorough website audits and top-notch Web Development services, empowering startups to conquer their online goals",
      },
    },
    {
      id: 4,
      headerHeading: 'FREE WEBSITE REVIEW',
      HeaderIcon: Eye,
      headerTags: [
        {
          id: 1,
          text: 'Issues',
          variant: 'primary',
        },
        {
          id: 2,
          text: 'Evaluations',
          variant: 'tertiary',
        },
        {
          id: 3,
          text: 'Solutions',
          variant: 'quaternary',
        },
      ],
      bodyText: {
        children:
          'Is your website not meeting your expectations and failing to produce the desired results? Let me conduct a free website review for you, allowing you to identify areas for improvement and pave the way to online success.',
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
