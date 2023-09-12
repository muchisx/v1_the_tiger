// Dependencies
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import { css } from 'styled-components';
// Content
import data from '@content/Job/job.data';
// Styled Components
import HeadingStyled from '@components/shared/Heading/Heading.styles';
import { CardFooter, CardStyled } from '@components/Card/Card.styles';
import { CardGridCellBottom } from '@components/CardGrid/CardGrid.styles';
// Types
import type { Job } from '@content/Job/job.types';
import type { Props as CardGridProps } from '@components/CardGrid/CardGrid.types';

const customStyles: CardGridProps['customStyles'] = css`
  ${CardStyled} {
    border: none;
  }

  ${CardGridCellBottom} {
    ${HeadingStyled} {
      text-transform: uppercase;
    }
  }
  @media only screen and (max-width: 768px) {
    ${CardFooter} {
      display: none;
    }
  }
`;

const footerButtonCommon: CardGridProps['cardCells'][0]['card']['footerButton'] = {
  buttonRole: 'link',
  Icon: ArrowRight,
  variant: 'quinary',
  IconSize: 20,
  IconWrapPadding: '.6rem',
  // overwritting later 👇🏻
  to: '/',
};

const CardCellButtonCommon: CardGridProps['cardCells'][0]['button'] = {
  buttonRole: 'link',
  text: 'View',
  variant: 'quaternary',
  // overwritting later 👇🏻
  to: '/',
};

const generateWorkJobCardsProps = (job: Job): CardGridProps['cardCells'][0] => {
  return {
    $keyId: job.$keyId,
    card: {
      backgroundImg: {
        src: job.thumbnailImage?.src as string,
        loading: job.thumbnailImage?.loading,
        position: job.thumbnailImage?.position,
      },
      cardLinkWrap: {
        to: `/work/${job.jobId}`,
      },
      footerButton: { ...footerButtonCommon, to: `/work/${job.jobId}` },
    },
    subheading: job.jobTitle,
    button: { ...CardCellButtonCommon, to: `/work/${job.jobId}` },
  };
};

const workJobCards: CardGridProps = {
  customStyles,
  cardCells: data.map((job) => generateWorkJobCardsProps(job)),
  subheadingFont: {
    headingLevel: 'h3',
    fontSize: {
      all: '2.4rem',
    },
  },
};

export default workJobCards;
