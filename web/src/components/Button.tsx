import ButtonStyled from './styled/ButtonStyled';

type Props = {
  text: string;
};

function Button(props: Props) {
  const { text } = props;

  return (
    <ButtonStyled type="quaternary" role="button" to="/">
      {text}
      <span>👉🏼</span>
    </ButtonStyled>
  );
}

export default Button;
