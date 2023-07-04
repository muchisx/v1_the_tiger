import { css } from 'styled-components';
import type { MediaQueryWithCSS } from '../types/media.types';
import getMediaQueryValue, { mediaQueries } from './getMediaQueryValue';
import getTypedEntries from './getTypedEntries';

const getCSSFromMediaQuery = <T,>(MediaQueryWithCSS: MediaQueryWithCSS<T>, property: string) => {
  // Follow the order so the rules override themselves following a mobile-first approach
  // This also ensures the rules are in the correct order even if the wrong order is given via props.
  const order = Object.keys(mediaQueries);

  const mediaWithCSSEntries = getTypedEntries(MediaQueryWithCSS).sort(([keyA], [keyB]) => {
    return order.indexOf(keyA) - order.indexOf(keyB);
  });

  const cssResult = mediaWithCSSEntries.map((entry) => {
    const [key, value] = entry;
    const cssDeclaration = `${property}: ${value};`;

    return css`
      @media only screen and (min-width: ${getMediaQueryValue(key)}) {
        ${cssDeclaration}
      }
    `;
  });

  return cssResult;
};

export default getCSSFromMediaQuery;
