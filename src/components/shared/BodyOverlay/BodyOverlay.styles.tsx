// Dependencies
import styled, { createGlobalStyle } from 'styled-components';
// Components
import HeaderStyled from '@components/Header/Header.styles';
// Utils
import { getMediaQueryValue } from '@utils';

export const BodyLock = createGlobalStyle`
  body {
    overflow-y: hidden;
    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      // Regain the scrollbar space on large screens so the content doesn't shift
      padding-right: var(--scrollbar-size);
    }
  }

  ${HeaderStyled} {
    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      // Regain the scrollbar space on large screens so the content doesn't shift
     margin-right: var(--scrollbar-size);
    }
  }
`;

export const BodyOverlayStyled = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  cursor: alias;
`;

export default BodyOverlayStyled;
