import ButtonStyled from './styled/ButtonStyled';

type CommonProps = {
  text: string;
  type: string;
};

type ConditionalProps =
  | { role: 'button'; to?: never }
  | { role: 'link'; to: string };

type Props = CommonProps & ConditionalProps;

function Button(props: Props) {
  const { text, role, type, to } = props;

  return <ButtonStyled type={type} role={role} to={to} text={text} />;
}

export default Button;
