import React from 'react';
import ButtonStyled from './styled/ButtonStyled';

function Button(props) {
  const { text } = props;

  return <ButtonStyled>{text}</ButtonStyled>;
}

export default Button;
