import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import { css } from 'styled-components';
import type { Props as CardGridProps } from '../../../components/CardGrid/CardGrid.types';
import { CardFooter } from '../../../components/Card/Card.styles';
import testImg from '../../../assets/images/hero-banner-1.jpg';

const customStyles: CardGridProps['customStyles'] = css`
  @media only screen and (max-width: 768px) {
    ${CardFooter} {
      display: none;
    }
  }
`;

const footerButtonCommon: CardGridProps['cardCells'][0]['card']['footerButton'] = {
  role: 'link',
  Icon: ArrowRight,
  variant: 'secondary',
  IconSize: 20,
  IconWrapPadding: '.6rem',
  // overwritting later 👇🏻
  to: '/',
};

const CardCellButtonCommon: CardGridProps['cardCells'][0]['button'] = {
  role: 'link',
  text: 'View',
  variant: 'quaternary',
  // overwritting later 👇🏻
  to: '/',
};

const workJobCards: CardGridProps = {
  customStyles,
  cardCells: [
    {
      id: 1,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: { ...footerButtonCommon, to: '/' },
      },
      subheading: 'REAL STATE WEBSITE',
      button: { ...CardCellButtonCommon, to: '/' },
    },
    {
      id: 2,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: { ...footerButtonCommon, to: '/' },
      },
      subheading: 'REAL STATE WEBSITE',
      button: { ...CardCellButtonCommon, to: '/' },
    },
    {
      id: 3,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: { ...footerButtonCommon, to: '/' },
      },
      subheading: 'REAL STATE WEBSITE',
      button: { ...CardCellButtonCommon, to: '/' },
    },
    {
      id: 4,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: { ...footerButtonCommon, to: '/' },
      },
      subheading: 'REAL STATE WEBSITE',
      button: { ...CardCellButtonCommon, to: '/' },
    },
    {
      id: 5,
      card: {
        backgroundImg: testImg,
        cardLinkWrap: {
          to: '/work/test',
        },
        footerButton: { ...footerButtonCommon, to: '/' },
      },
      subheading: 'REAL STATE WEBSITE',
      button: { ...CardCellButtonCommon, to: '/' },
    },
  ],
};

export default workJobCards;
