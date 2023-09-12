// Dependencies
import { css } from 'styled-components';
// Utils
import { getMediaQueryValue } from '@utils';
// Styled Components
import Tag from '@components/shared/Tag/Tag';
import { TextsContainer } from '@components/SplitContent/SplitContent.styles';
import { AccordionList } from '@components/shared/Accordion/Accordion.styles';

export const serviceDividerCustomCSS = css`
  background-color: var(--body-bg-color-tertiary);
`;

export const serviceCustomCSS = css`
  gap: 3rem;
  background-color: var(--body-bg-color-tertiary);

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      max-width: calc(var(--section-max-width) - var(--gutter-contained) * 2);
      border-bottom: 1px solid var(--neutral-color-quaternary);
    }
  }

  .split-content__first {
    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      position: sticky;
      top: 36%;
      height: fit-content;
    }
    @media only screen and (min-width: ${getMediaQueryValue('lg')}) {
      flex: 1 1 40%;
    }

    ${Tag} {
      padding-inline: 14px;
      margin-bottom: 4px;
      white-space: pre;
    }

    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      ${Tag} {
        padding-inline: 20px;
      }
    }
  }

  .split-content__second {
    ${AccordionList} {
      margin-top: 24px;
    }
  }

  @media only screen and (min-width: ${getMediaQueryValue('lg')}) {
    .split-content__second {
      flex: 1 1 60%;
      ${TextsContainer} {
        flex-direction: row;

        > * {
          flex: 1 1 50%;
        }
      }
    }
  }
`;
