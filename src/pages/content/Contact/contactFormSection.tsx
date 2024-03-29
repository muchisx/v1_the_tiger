// Dependencies
import { css } from 'styled-components';
// Styled Components
import { BackgroundShape } from '@components/SplitContent/SplitContent.styles';
// Utils
import { getMediaQueryValue } from '@utils';
import getFixedCSSvw from '@utils/getFixedCSSvw';

const contactFormSectionCSS = css`
  gap: 60px;
  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    isolation: isolate;
    background-color: var(--body-bg-color-tertiary);

    ::before {
      content: '';
      position: absolute;
      width: ${getFixedCSSvw(46)};
      right: 0;
      top: 0;
      bottom: 0;
      background-color: white;
    }
  }

  ${BackgroundShape} {
    top: 16%;
    width: min(440px, 90%);
    right: -32%;
    left: unset;

    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      top: unset;
      width: min(640px, ${getFixedCSSvw(46)});
      bottom: 6%;
      left: ${getFixedCSSvw(30)};
    }

    @media only screen and (min-width: ${getMediaQueryValue('xxl')}) {
      left: ${getFixedCSSvw(36)};
    }
  }

  .split-content__first {
    padding-bottom: 48px;
    border-bottom: 1px solid var(--neutral-color);

    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      flex: 1 1 56%;
      border: unset;
    }

    .contact-sticky {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: sticky;
      top: 12%;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 24px;
    }
  }

  .split-content__second {
    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      flex: 1 1 44%;
      padding-left: 60px;
    }
  }
`;

export default contactFormSectionCSS;
