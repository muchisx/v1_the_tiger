import { type StyledIcon } from '@styled-icons/styled-icon';
import type { Props as CustomIconProps } from '../CustomIcon/CustomIcon.types';

type Role = 'button' | 'link';
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
type CommonProps = {
  // Common
  variant: Variant;
  role: Role;
  className?: string;
  text?: string;
  Icon?: StyledIcon | CustomIconProps;
};
type ConditionalProps =
  | { role: 'button'; to?: never; newTab?: never; rel?: never; action: () => void }
  | { role: 'link'; to: string; newTab?: boolean; rel?: string; action?: never };

export type Props = CommonProps & ConditionalProps;

// Styled Components
export type ContainerProps = {
  Icon?: Props['Icon'];
  variant: Props['variant'];
  text?: Props['text'];
  isHovered: boolean;
};
