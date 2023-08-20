/* eslint-disable max-len */
import { ArrowRight, ShoppingBag, Molecule, Rocket, Eye, Building } from '@styled-icons/fluentui-system-filled';
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
  topTag: {
    variant: 'secondary',
    children: 'Services',
  },
  leftHeading: {
    children: leftHeading,
    fontSize: {
      all: '4.8rem',
    },
  },
  leftButtons: [
    {
      $keyId: crypto.randomUUID(),
      role: 'link',
      to: '/services',
      text: 'Read more',
      variant: 'secondary',
      Icon: ArrowRight,
    },
    {
      $keyId: crypto.randomUUID(),
      role: 'link',
      to: '/contact',
      text: 'Contact',
      variant: 'secondary',
      Icon: ArrowRight,
    },
  ],
  leftTexts: [
    {
      $keyId: crypto.randomUUID(),
      children: leftText,
      className: 'highlight-quaternary',
    },
  ],
};

const rightContent: SplitContentProps['rightContent'] = {
  cards: [
    {
      $keyId: crypto.randomUUID(),
      headerHeading: 'SHOPIFY DEVELOPMENT',
      HeaderIcon: ShoppingBag,
      headerTags: [
        {
          $keyId: crypto.randomUUID(),
          children: 'Shopify',
          variant: 'primary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Development',
          variant: 'tertiary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Custom',
          variant: 'quaternary',
        },
      ],
      bodyText: {
        children:
          'As the face of your business, your website demands equal dedication and investment in both its aesthetics and functionality. This is precisely why I prioritize the development of adaptable, customer-focused websites that align seamlessly with your business needs.',
      },
    },
    {
      $keyId: crypto.randomUUID(),
      headerHeading: 'REACT DEVELOPMENT',
      HeaderIcon: Molecule,
      headerTags: [
        {
          $keyId: crypto.randomUUID(),
          children: 'React',
          variant: 'primary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Development',
          variant: 'tertiary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Custom',
          variant: 'quaternary',
        },
      ],
      bodyText: {
        children:
          'Utilizing my knowledge in web design, along with technical skills in React and extensive CSS knowledge, I am a perfect fit for any custom component development, bug fixing or tweaking existing components to suit your needs.',
      },
    },
    {
      $keyId: crypto.randomUUID(),
      headerHeading: 'HELPING STARTUPS',
      HeaderIcon: Rocket,
      headerTags: [
        {
          $keyId: crypto.randomUUID(),
          children: 'Audit',
          variant: 'primary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Identity',
          variant: 'tertiary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Development',
          variant: 'quaternary',
        },
      ],
      bodyText: {
        children:
          "Starting up a business comes with its fair share of challenges, but your website should not be one of them. That's where I come in. I provide thorough website audits and top-notch Web Development services, empowering startups to conquer their online goals",
      },
    },
    {
      $keyId: crypto.randomUUID(),
      headerHeading: 'BACKING EST. BUSINESS',
      HeaderIcon: Building,
      headerTags: [
        {
          $keyId: crypto.randomUUID(),
          children: 'Audit',
          variant: 'primary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Identity',
          variant: 'tertiary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Development',
          variant: 'quaternary',
        },
      ],
      bodyText: {
        // TODO: Must change this phrase to my own, make it shorter too to accomodate max-width page cards
        children:
          "Established businesses recognise the significance of an impressive online presence to thrive in today's market. To support your journey towards digital success, I offer a suite of specialised services like Web dev, Shopify development, and website audits. Together, we can unlock your business's full potential and secure a prominent position in the digital realm.",
      },
    },
    {
      $keyId: crypto.randomUUID(),
      headerHeading: 'FREE WEBSITE REVIEW',
      HeaderIcon: Eye,
      headerTags: [
        {
          $keyId: crypto.randomUUID(),
          children: 'Issues',
          variant: 'primary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Evaluations',
          variant: 'tertiary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Solutions',
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
