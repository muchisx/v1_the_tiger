// Dependencies
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import { css } from 'styled-components';
// Styles Components
import { CardFooter, CardStyled } from '@components/Card/Card.styles';
import HeadingStyled from '@components/shared/Heading/Heading.styles';
import { CardGridCellBottom } from '@components/CardGrid/CardGrid.styles';
// Utils
import shuffleArray from '@utils/shuffleArray';
// Types
import type { Props as CardGridProps } from '@components/CardGrid/CardGrid.types';
import type { Job } from './job.types';
// Content
import data from './job.data';

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
  IconSize: 20,
  Icon: ArrowRight,
  variant: 'quinary',
  IconWrapPadding: '.6rem',
  // overwritting later 👇🏻
  to: '/',
};

const CardCellButtonCommon: CardGridProps['cardCells'][0]['button'] = {
  text: 'View',
  buttonRole: 'link',
  variant: 'quaternary',
  // overwritting later 👇🏻
  to: '/',
};

const generateJobCardsProps = (job: Job): CardGridProps['cardCells'][0] => {
  return {
    $keyId: job.$keyId,
    card: {
      backgroundImg: {
        src: job.heroBannerImage,
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

const jobMoreJobs = {
  customStyles,
  cardCells: (currentJob: Job) => {
    const jobsWithoutCurrentJob = data.filter((job) => job.$keyId !== currentJob.$keyId);
    const shuffledJobs = shuffleArray(jobsWithoutCurrentJob).slice(0, 3);

    return shuffledJobs.map((job) => generateJobCardsProps(job));
  },
  footerButton: {
    buttonRole: 'link',
    to: '/work',
    variant: 'primary',
    text: 'View all featured work',
    Icon: ArrowRight,
  } as CardGridProps['footerButton'],
};

export default jobMoreJobs;
