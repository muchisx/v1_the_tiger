import type { FontSize } from '@/types/css.types';

const getFixedCSSvw = (vwValue: number): FontSize => {
  return `calc(${vwValue}vw * var(--vw-fix))`;
};

export default getFixedCSSvw;
