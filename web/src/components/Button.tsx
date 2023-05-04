import { useState } from 'react';
import ButtonStyled from './styled/ButtonStyled';
import type { StyledProps } from './styled/ButtonStyled';

type CommonProps = {
  text?: StyledProps['text'];
  Icon?: StyledProps['Icon'];
  variant: StyledProps['variant'];
  className?: StyledProps['className'];
  newTab?: StyledProps['newTab'];
  rel?: StyledProps['rel'];
};
type ConditionalProps =
  | { role: 'button'; to?: never; newTab?: never; rel?: never; action: StyledProps['action'] }
  | { role: 'link'; to: StyledProps['to']; action?: never };

type Props = CommonProps & ConditionalProps;

function Button(props: Props) {
  const { text, role, variant, to, Icon, action, className, newTab, rel } = props;
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
      newTab={newTab}
      rel={rel}
    />
  );
}

Button.defaultProps = {
  text: undefined,
  className: undefined,
  Icon: undefined,
  newTab: false,
  rel: undefined,
};

export default Button;
