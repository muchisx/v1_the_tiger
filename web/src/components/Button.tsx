import { StyledIcon } from '@styled-icons/styled-icon';
import ButtonStyled from './styled/ButtonStyled';

export type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

type CommonProps = {
  text?: string;
  Icon?: StyledIcon;
  variant: Variant;
};

type ConditionalProps = { role: 'button'; to?: never } | { role: 'link'; to: string };

type Props = CommonProps & ConditionalProps;

function Button(props: Props) {
  const { text, role, variant, to, Icon } = props;

  return <ButtonStyled variant={variant} role={role} to={to} text={text} Icon={Icon} />;
}

Button.defaultProps = {
  text: undefined,
  Icon: undefined,
};

export default Button;
