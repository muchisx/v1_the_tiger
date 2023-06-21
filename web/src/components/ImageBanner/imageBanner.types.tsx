import type { Height } from '../../types/css.types';

export type Props = {
  src: string;
  height?: Height;
  imgOverlayColor?: string;
  enableParallax?: boolean;
};

export type ContainerProps = {
  $height?: Height;
  $imgOverlayColor?: Props['imgOverlayColor'];
};
