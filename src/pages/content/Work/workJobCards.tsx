import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import { css } from 'styled-components';
import type { Props as CardGridProps } from '../../../components/CardGrid/CardGrid.types';
import { CardFooter } from '../../../components/Card/Card.styles';
import data from '../Job/job.data';
import type { Job } from '../Job/job.types';

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

const generateWorkJobCardsProps = (job: Job): CardGridProps['cardCells'][0] => {
  return {
    id: job.id,
    card: {
      backgroundImg: job.heroBannerImage,
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
};

export default workJobCards;
