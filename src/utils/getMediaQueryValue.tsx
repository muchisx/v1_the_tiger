import type { MediaQueryKey } from '../types/media.types';

const getMediaQueryValue = (MediaQueryKey: MediaQueryKey): string => {
  let value;

  switch (MediaQueryKey) {
    case 'all':
      value = '0px';
      break;
    case 'xxsm':
      value = '376px';
      break;
    case 'xsm':
      value = '426px';
      break;
    case 'sm':
      value = '601px';
      break;
    case 'md':
      value = '769px';
      break;
    case 'lg':
      value = '1025px';
      break;
    case 'xl':
      value = '1281px';
      break;
    case 'xxl':
      value = '1537px';
      break;
    default:
      value = '0px';
  }
  return value;
};

export default getMediaQueryValue;
