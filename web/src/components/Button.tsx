import React from 'react';
import ButtonStyled from './styled/ButtonStyled';

function Button(props) {
  const { text } = props;

  return (
    <ButtonStyled type="primary">
      {text}
      <span>👉🏼</span>
    </ButtonStyled>
  );
}

export default Button;
