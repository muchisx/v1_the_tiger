import type { MediaQueryWithCSS } from '@/types/mediaQuery.types';
import type { FontSize } from '@/types/css.types';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Props = {
  className?: string;
  fontWeight?: number;
  children: React.ReactNode;
  headingLevel?: HeadingLevel;
  fontSize?: MediaQueryWithCSS<FontSize>;
};

// Styled Components
export type HeadingProps = {
  $fontWeight?: Props['fontWeight'];
  $fontSize?: Props['fontSize'];
};
