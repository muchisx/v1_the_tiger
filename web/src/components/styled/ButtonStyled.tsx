import styled, { css } from 'styled-components';

function ButtonStyled(props) {
  const { role, type = 'primary', children } = props;

  const Container = styled.div`
    background: var(--button-bg-${type});
    border-radius: 100px;
    padding: 2rem 8rem;
    cursor: pointer;
  `;

  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    padding: 2rem 4rem;
    font-size: 14rem;
    color: var(--button-text-${type});
    background: none;
    cursor: pointer;
  `;

  return (
    <Container>
      <Button>{children}</Button>
    </Container>
  );
}

export default ButtonStyled;
