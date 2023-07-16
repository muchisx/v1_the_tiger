// Dependencies
import { AnchorHTMLAttributes } from 'react';

export type TabStyledProps = {
  isActive?: Props['isActive'];
  isShown?: Props['isShown'];
};

export type Props = {
  children: string;
  isActive?: boolean;
  isShown?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
