import ButtonStyled from './styled/ButtonStyled';

export type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

type CommonProps = {
  text?: string;
  variant: Variant;
};

type ConditionalProps = { role: 'button'; to?: never } | { role: 'link'; to: string };

type Props = CommonProps & ConditionalProps;

function Button(props: Props) {
  const { text, role, variant, to } = props;

  return <ButtonStyled variant={variant} role={role} to={to} text={text} />;
}

Button.defaultProps = {
  text: undefined,
};

export default Button;
