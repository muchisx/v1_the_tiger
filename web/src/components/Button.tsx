import { useState } from 'react';
import ButtonStyled from './styled/ButtonStyled';
import type { StyledProps } from './styled/ButtonStyled';

type CommonProps = {
  text?: StyledProps['text'];
  Icon?: StyledProps['Icon'];
  variant: StyledProps['variant'];
  className?: StyledProps['className'];
};
type ConditionalProps =
  | { role: 'button'; to?: never; action: StyledProps['action'] }
  | { role: 'link'; to: StyledProps['to']; action?: never };

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
