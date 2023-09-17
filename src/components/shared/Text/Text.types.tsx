// Dependencies
import {
  type ReactNode,
  HTMLAttributes,
  DelHTMLAttributes,
  InsHTMLAttributes,
  LabelHTMLAttributes,
  QuoteHTMLAttributes,
  TimeHTMLAttributes,
} from 'react';
import type { AvailableCSSFontVar, TextColorCSSVar } from '@/types/general.types';
import type { TextAlign } from '@/types/css.types';

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

type GlobalAttributes = {
  tag?:
    | 'abbr'
    | 'b'
    | 'cite'
    | 'code'
    | 'samp'
    | 'var'
    | 'dd'
    | 'dl'
    | 'dt'
    | 'em'
    | 'i'
    | 'mark'
    | 's'
    | 'small'
    | 'span'
    | 'strong'
    | 'sub'
    | 'sup'
    | 'u'
    | 'pre'
    | 'p';
} & HTMLAttributes<HTMLElement>;

type DelAttributes = {
  tag?: 'del';
} & DelHTMLAttributes<HTMLElement>;

type InsAttributes = {
  tag?: 'ins';
} & InsHTMLAttributes<HTMLElement>;

type LabelAttributes = {
  tag?: 'label';
} & LabelHTMLAttributes<HTMLLabelElement>;

type QuoteAttributes = {
  tag?: 'q';
} & QuoteHTMLAttributes<HTMLQuoteElement>;

type TimeAttributes = {
  tag?: 'time';
} & TimeHTMLAttributes<HTMLTimeElement>;

type ConditionalAttributes =
  | GlobalAttributes
  | DelAttributes
  | InsAttributes
  | LabelAttributes
  | QuoteAttributes
  | TimeAttributes;

export type TextProps = {
  $fontWeight?: Props['fontWeight'];
  $fontSize?: Props['fontSize'];
  $fontFamily?: Props['fontFamily'];
  $textAlign?: Props['textAlign'];
  $textColor?: Props['textColor'];
};

export type Props = {
  children: ReactNode;
  textColor?: TextColorCSSVar;
  fontWeight?: number;
  fontSize?: string;
  textAlign?: TextAlign;
  tag?: Tag;
  className?: string;
  fontFamily?: AvailableCSSFontVar;
} & ConditionalAttributes;
