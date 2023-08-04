// Dependencies
import { css } from 'styled-components';
// Utils
import { getMediaQueryValue } from '@utils';
// Styled Components
import Tag from '@components/shared/Tag/Tag';
import { TextsContainer } from '@/components/SplitContent/SplitContent.styles';

const serviceCustomCSS = css`
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
      padding-inline: 20px;
      white-space: pre;
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

export default serviceCustomCSS;
