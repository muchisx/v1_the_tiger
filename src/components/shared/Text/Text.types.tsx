import { type ReactNode } from 'react';

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
};
export type Props = {
  children: ReactNode;
  fontWeight?: number;
  fontSize?: string;
  tag?: Tag;
  className?: string;
};
