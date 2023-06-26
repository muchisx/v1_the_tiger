export type MediaQueryWithCSS<T> = {
  all?: T;
  xxsm?: T;
  xsm?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
};

export type MediaQueryKey = 'all' | 'xxsm' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
