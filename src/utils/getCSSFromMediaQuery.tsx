import { css } from 'styled-components';
import type { MediaQueryWithCSS } from '../types/media.types';
import getMediaQueryValue from './getMediaQueryValue';
import getTypedEntries from './getTypedEntries';

const getCSSFromMediaQuery = <T,>(MediaQueryWithCSS: MediaQueryWithCSS<T>, property: string) => {
  // Follow the order so the rules override following a mobile-first approach
  // This also ensures the rules are in the correct order even if the wrong order is given via props.
  // TODO: Have a general provider for all of query keys and not manually use this 'order' variable,
  // TODO:  maybe styled-components theme?

  const order = ['all', 'xxsm', 'xsm', 'sm', 'md', 'lg', 'xl', 'xxl'];
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
