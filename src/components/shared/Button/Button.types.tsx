import { type StyledIcon } from '@styled-icons/styled-icon';
import { ButtonHTMLAttributes } from 'react';

type Role = 'button' | 'link';
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
type CommonProps = {
  // Common
  variant: Variant;
  role: Role;
  className?: string;
  text?: string;

  // TODO - Make Icon prop also accept CustomIcon component
  Icon?: StyledIcon;
};

type RoleConditionalProps =
  | { role: 'button'; to?: never; newTab?: never; rel?: never; action: () => void }
  | { role: 'link'; to: string; newTab?: boolean; rel?: string; action?: never };

type IconConditionalProps =
  | { Icon: StyledIcon; IconSize?: number; IconWrapPadding?: string }
  | { Icon?: never; IconSize?: never; IconWrapPadding?: never };

export type Props = CommonProps & RoleConditionalProps & IconConditionalProps & ButtonHTMLAttributes<HTMLButtonElement>;

// Styled Components
export type ContainerProps = {
  Icon?: Props['Icon'];
  variant: Props['variant'];
  text?: Props['text'];
  isHovered: boolean;
  IconWrapPadding?: Props['IconWrapPadding'];
};
