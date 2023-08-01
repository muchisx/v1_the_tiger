// Dependencies
import { type FlattenSimpleInterpolation } from 'styled-components';
// Types
import type { Props as HeadingProps } from '@components/shared/Heading/Heading.types';
import type { Height, CSSColor } from '@/types/css.types';
import type { MediaQueryWithCSS } from '@/types/mediaQuery.types';

type BottomContent = {
  title: string;
  info?: string;
};

export type Props = {
  customStyles?: FlattenSimpleInterpolation;

  src: string;
  minHeight?: MediaQueryWithCSS<Height>;
  imgOverlayColor?: CSSColor;
  enableParallax?: boolean;

  heading?: HeadingProps;
  bottomContent?: BottomContent[];
};

export type ContainerProps = {
  $minHeight?: Props['minHeight'];
  $imgOverlayColor?: Props['imgOverlayColor'];
};
