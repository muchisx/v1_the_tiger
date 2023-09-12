// Dependencies
import { type StyledIcon } from '@styled-icons/styled-icon';

type ButtonRole = 'button' | 'link' | 'submit' | 'reset';
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
type CommonProps = {
  // Common
  variant: Variant;
  buttonRole: ButtonRole;
  className?: string;
  text?: string;

  // TODO - Make Icon prop also accept CustomIcon component
  Icon?: StyledIcon;
  isDisabled?: boolean;
};

type RoleConditionalProps =
  | {
      buttonRole: 'button';
      to?: never;
      newTab?: never;
      rel?: never;
      action: () => void;
    }
  | {
      buttonRole: 'submit' | 'reset';
      to?: never;
      newTab?: never;
      rel?: never;
      action?: () => void;
    }
  | {
      buttonRole: 'link';
      to: string;
      newTab?: boolean;
      rel?: string;
      action?: never;
    };

type IconConditionalProps =
  | { Icon: StyledIcon; IconSize?: number; IconWrapPadding?: string }
  | { Icon?: never; IconSize?: never; IconWrapPadding?: never };

export type Props = CommonProps & RoleConditionalProps & IconConditionalProps;

// Styled Components
export type ContainerProps = {
  variant: Props['variant'];
  text?: Props['text'];
  Icon?: Props['Icon'];
  isDisabled?: Props['isDisabled'];
  IconWrapPadding?: Props['IconWrapPadding'];
  isHovered: boolean;
};
