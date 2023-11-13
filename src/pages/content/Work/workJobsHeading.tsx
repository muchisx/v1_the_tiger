// Dependencies
import { css } from 'styled-components';
// Styled Components
import { HeadingStyled } from '@components/shared/Heading/Heading.styles';
// Utils
import { getMediaQueryValue } from '@utils';
// Types
import type { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';

const customStyles = css`
  margin-bottom: 4px;

  @media only screen and (min-width: ${getMediaQueryValue('all')}) {
    padding-block: 20px 0;
  }

  .split-content__second {
    align-items: center;
    ${HeadingStyled} {
      width: fit-content;
      padding-bottom: 16px;

      border-bottom: 1px solid var(--neutral-color);
    }
  }
`;

const workJobsHeading: SplitContentProps = {
  customStyles,
  leftContent: {
    buttonsLabel: ' ',
  },
  rightContent: {
    rightHeading: {
      children: 'FEATURED PROJECTS',
      fontSize: {
        all: '3.2rem',
        md: 'clamp(3rem, 4vw, 5.4rem)',
        xl: 'clamp(4rem, 4.1vw, 6.1rem)',
      },
    },
  },
};

export default workJobsHeading;
