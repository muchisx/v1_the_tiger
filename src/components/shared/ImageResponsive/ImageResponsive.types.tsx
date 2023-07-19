// Dependencies
import { ImgHTMLAttributes, HtmlHTMLAttributes } from 'react';
// Types
import type { Width, Height } from '../../../types/css.types';

// TODO: Finish this so we can source multiple types of images like webp and have jpeg as fallback
// import type { ImageType } from '@/types/media.types';
// type Source = {
//   srcURL: string;
//   srcType: ImageType;
// };

type ConditionnalProps =
  | ({ refTarget?: 'container' } & HtmlHTMLAttributes<HTMLDivElement>)
  | ({ refTarget?: 'image' } & ImgHTMLAttributes<HTMLImageElement>);

export type Props = {
  height: Height;
  width: Width;
  padding?: string;
  src: string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'eager' | 'lazy';
} & ConditionnalProps;
