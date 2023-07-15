import type { MediaQueryKey, MediaQueryKeyAndValue } from '../types/mediaQuery.types';

// * This should be the only source of mediaQuery data throughout the app
export const mediaQueries: MediaQueryKeyAndValue = {
  all: '0px',
  xxsm: '376px',
  xsm: '426px',
  sm: '601px',
  md: '769px',
  lg: '1025px',
  xl: '1281px',
  xxl: '1537px',
};

const getMediaQueryValue = (MediaQueryKey: MediaQueryKey): string => {
  let value;

  if (MediaQueryKey in mediaQueries) {
    value = mediaQueries[MediaQueryKey];
  } else {
    throw new Error('Media Query Key is not valid');
  }

  return value;
};

export default getMediaQueryValue;
