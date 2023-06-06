import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import type { Props as CardGridProps } from '../../../components/CardGrid/CardGrid.types';

import testImg from '../../../assets/images/hero-banner-1.jpg';

const workJobCards: CardGridProps = {
  cardCells: [
    {
      id: 1,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: {
          role: 'link',
          Icon: ArrowRight,
          to: '/work/test',
          variant: 'secondary',
        },
      },
      subheading: 'REAL STATE WEBSITE',
      button: {
        role: 'link',
        text: 'View',
        to: '/',
        variant: 'quaternary',
      },
    },
    {
      id: 2,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: {
          role: 'link',
          Icon: ArrowRight,
          to: '/work/test',
          variant: 'secondary',
        },
      },
      subheading: 'REAL STATE WEBSITE',
      button: {
        role: 'link',
        text: 'View',
        to: '/',
        variant: 'quaternary',
      },
    },
    {
      id: 3,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: {
          role: 'link',
          Icon: ArrowRight,
          to: '/work/test',
          variant: 'secondary',
        },
      },
      subheading: 'REAL STATE WEBSITE',
      button: {
        role: 'link',
        text: 'View',
        to: '/',
        variant: 'quaternary',
      },
    },
    {
      id: 4,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: {
          role: 'link',
          Icon: ArrowRight,
          to: '/work/test',
          variant: 'secondary',
        },
      },
      subheading: 'REAL STATE WEBSITE',
      button: {
        role: 'link',
        text: 'View',
        to: '/',
        variant: 'quaternary',
      },
    },
    {
      id: 5,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: {
          role: 'link',
          Icon: ArrowRight,
          to: '/work/test',
          variant: 'secondary',
        },
      },
      subheading: 'REAL STATE WEBSITE',
      button: {
        role: 'link',
        text: 'View',
        to: '/',
        variant: 'quaternary',
      },
    },
  ],
};

export default workJobCards;
