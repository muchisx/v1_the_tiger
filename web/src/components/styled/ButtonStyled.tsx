import styled, { css } from 'styled-components';

function ButtonStyled(props) {
  const { role, type = 'primary', children } = props;

  const Container = styled.div`
    background: var(--button-bg-${type});
    border-radius: 100px;
    padding: 2rem 4rem;
  `;

  const Button = styled.button`
    font-size: 14rem;
    color: var(--button-text-${type});
    background: none;
  `;

  return (
    <Container>
      <Button>{children}</Button>
    </Container>
  );
}

export default ButtonStyled;
