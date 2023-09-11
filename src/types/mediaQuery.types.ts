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
export type MediaQueryValue = `${number}px`;

export type MediaQueryKeyAndValue = {
  all: MediaQueryValue;
  xxsm: MediaQueryValue;
  xsm: MediaQueryValue;
  sm: MediaQueryValue;
  md: MediaQueryValue;
  lg: MediaQueryValue;
  xl: MediaQueryValue;
  xxl: MediaQueryValue;
};
