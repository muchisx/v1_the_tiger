import { type FlattenSimpleInterpolation } from 'styled-components';
import type { Height, CSSColor } from '../../types/css.types';
import type { Props as HeadingProps } from '../shared/Heading/Heading.types';

type BottomContent = {
  title: string;
  info?: string;
};

export type Props = {
  customStyles?: FlattenSimpleInterpolation;

  src: string;
  height?: Height;
  imgOverlayColor?: CSSColor;
  enableParallax?: boolean;

  heading?: HeadingProps;
  bottomContent?: BottomContent[];
};

export type ContainerProps = {
  $height?: Props['height'];
  $imgOverlayColor?: Props['imgOverlayColor'];
};
