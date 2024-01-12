// Dependencies
import { HTMLAttributes } from 'react';
// Types
import type { Width, Height } from '@/types/css.types';

// TODO: Finish this so we can source multiple types of images like webp and have jpeg as fallback
// import type { ImageType } from '@/types/media.types';
// type Source = {
//   srcURL: string;
//   srcType: ImageType;
// };

export type ImageProps = {
  fit: Props['fit'];
  position: Props['position'];
  isLoading: boolean;
};

export type ImageContainerProps = {
  $height: Props['height'];
  $width: Props['width'];
  $padding?: Props['padding'];
};

export type Props = {
  height: Height;
  width: Width;
  padding?: string;
  src: string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'eager' | 'lazy';
  // Record<never, never> - This allows autocomplete while allowing any string aswell
  position?: 'bottom' | 'center' | 'left' | 'right' | 'top' | Record<never, never>;
} & HTMLAttributes<HTMLDivElement>;
