import { useState } from 'react';
import { StyledIcon } from '@styled-icons/styled-icon';
import ButtonStyled from './styled/ButtonStyled';

export type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
type CommonProps = {
  text?: string;
  Icon?: StyledIcon;
  variant: Variant;
  className?: string;
};
type ConditionalProps =
  | { role: 'button'; to?: never; action: () => void }
  | { role: 'link'; to: string; action?: never };

type Props = CommonProps & ConditionalProps;

function Button(props: Props) {
  const { text, role, variant, to, Icon, action, className } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((current: boolean) => !current);
  };

  return (
    <ButtonStyled
      variant={variant}
      role={role}
      to={to}
      text={text}
      Icon={Icon}
      handleHover={handleHover}
      isHovered={isHovered}
      action={action}
      className={className}
    />
  );
}

Button.defaultProps = {
  text: undefined,
  className: undefined,
  Icon: undefined,
};

export default Button;
