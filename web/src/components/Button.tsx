import React from 'react';
import ButtonStyled from './styled/ButtonStyled';

function Button(props) {
  const { text } = props;

  const attributes = {
    href: '/',
  };

  return (
    <ButtonStyled type="quaternary" role="button" attributes={attributes}>
      {text}
      <span>👉🏼</span>
    </ButtonStyled>
  );
}

export default Button;
