// Dependencies
import { type ReactNode } from 'react';
import type { AvailableCSSFontVar } from '@/types/general.types';

export type Tag =
  | 'abbr'
  | 'b'
  | 'cite'
  | 'code'
  | 'samp'
  | 'var'
  | 'dd'
  | 'dl'
  | 'dt'
  | 'del'
  | 'em'
  | 'i'
  | 'ins'
  | 'label'
  | 'mark'
  | 'q'
  | 's'
  | 'small'
  | 'span'
  | 'strong'
  | 'sub'
  | 'sup'
  | 'time'
  | 'u'
  | 'pre'
  | 'p';

export type TextProps = {
  $fontWeight?: Props['fontWeight'];
  $fontSize?: Props['fontSize'];
  $fontFamily?: Props['fontFamily'];
};
export type Props = {
  children: ReactNode;
  fontWeight?: number;
  fontSize?: string;
  tag?: Tag;
  className?: string;
  fontFamily?: AvailableCSSFontVar;
};
