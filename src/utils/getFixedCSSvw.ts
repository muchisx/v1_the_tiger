const getFixedCSSvw = (vwValue: number): string => {
  return `calc(${vwValue}vw * var(--vw-fix))`;
};

export default getFixedCSSvw;
