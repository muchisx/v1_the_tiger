import { useState, useEffect } from 'react';
import { getMediaQueryValue } from '../utils';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  }, [matches, query]);

  return matches;
}

export const useIsXXSmall = () => useMediaQuery(`(min-width: ${getMediaQueryValue('xxsm')})`);
export const useIsXSmall = () => useMediaQuery(`(min-width: ${getMediaQueryValue('xsm')})`);
export const useIsSmall = () => useMediaQuery(`(min-width: ${getMediaQueryValue('sm')})`);
export const useIsMedium = () => useMediaQuery(`(min-width: ${getMediaQueryValue('md')})`);
export const useIsLarge = () => useMediaQuery(`(min-width: ${getMediaQueryValue('lg')})`);
export const useIsXLarge = () => useMediaQuery(`(min-width: ${getMediaQueryValue('xl')})`);
export const useIsXXLarge = () => useMediaQuery(`(min-widths: ${getMediaQueryValue('xxl')})`);
export default useMediaQuery;
