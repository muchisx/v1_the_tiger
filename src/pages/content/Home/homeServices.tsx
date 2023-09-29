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
  margin-top: 100px;
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
    My expertise lies in providing reliable web development services and expert Shopify and React assistance to
    businesses of all sizes. My goal is to empower businesses to establish robust online platforms through close
    collaboration, resulting in successful growth.
  </>
);

const leftHeading = (
  <>
    <span className="highlight-quaternary">WAYS I </span>

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
      all: '3.8rem',
      md: '4.8rem',
    },
  },
  leftButtons: [
    {
      $keyId: crypto.randomUUID(),
      buttonRole: 'link',
      to: '/services',
      text: 'Read more',
      variant: 'secondary',
      Icon: ArrowRight,
    },
    {
      $keyId: crypto.randomUUID(),
      buttonRole: 'link',
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
      $styles: {
        borderColor: 'var(--neutral-color-quaternary)',
      },
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
          'As the front of your business, your website demands equal dedication and investment in both its aesthetics and functionality. This is precisely why I prioritize the development of adaptable, customer-focused features that align seamlessly with your business needs.',
      },
    },
    {
      $keyId: crypto.randomUUID(),
      $styles: {
        borderColor: 'var(--neutral-color-quaternary)',
      },
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
          'Utilizing my knowledge in web development, along with technical skills in React and extensive CSS & JS knowledge, I am a perfect fit for any new component development tasks, bug fixing or for tweaking existing components to suit your needs.',
      },
    },
    {
      $keyId: crypto.randomUUID(),
      $styles: {
        borderColor: 'var(--neutral-color-quaternary)',
      },
      headerHeading: 'AIDING STARTUPS',
      HeaderIcon: Rocket,
      headerTags: [
        {
          $keyId: crypto.randomUUID(),
          children: 'Audit',
          variant: 'primary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Reach',
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
          "Starting up a business comes with its fair share of challenges, but your website should not be one of them. That's where I come in. I provide thorough website audits and top-notch Web Development services, empowering startups to conquer their online goals.",
      },
    },
    {
      $keyId: crypto.randomUUID(),
      $styles: {
        borderColor: 'var(--neutral-color-quaternary)',
      },
      headerHeading: 'BACKING EST. BUSINESSES',
      HeaderIcon: Building,
      headerTags: [
        {
          $keyId: crypto.randomUUID(),
          children: 'Optimization',
          variant: 'primary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Features',
          variant: 'tertiary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Audit',
          variant: 'quaternary',
        },
      ],
      bodyText: {
        children:
          "Solid online presence is essential for established businesses in today's digital age. In an increasingly competitive marketplace, it's crucial to not just have a website, but to have a dynamic and engaging online platform that resonates with your target audience.",
      },
    },
    {
      $keyId: crypto.randomUUID(),
      $styles: {
        borderColor: 'var(--neutral-color-quaternary)',
      },
      headerHeading: 'FREE WEBSITE REVIEW',
      HeaderIcon: Eye,
      headerTags: [
        {
          $keyId: crypto.randomUUID(),
          children: 'UX - Accesibility',
          variant: 'primary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Performance',
          variant: 'tertiary',
        },
        {
          $keyId: crypto.randomUUID(),
          children: 'Bugs',
          variant: 'quaternary',
        },
      ],
      bodyText: {
        children:
          'Experiencing slow performance, a high bounce rate, or unsuccessful conversion strategies on your website? I offer a free website review that can help you identify areas for improvement that will bring you closer to your goals.',
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
