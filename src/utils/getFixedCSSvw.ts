const getFixedCSSvw = (vwValue: string): string => {
  return `calc(${vwValue} + var(--vw-fix))`;
};

export default getFixedCSSvw;
