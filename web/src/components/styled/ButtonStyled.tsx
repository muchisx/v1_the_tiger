import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

function ButtonStyled(props) {
  const { role, type = 'primary', children, attributes } = props;

  const Container = styled.div`
    background: var(--btn-color-bg-${type});
    border-radius: 100px;
    padding: 2rem 8rem;
    color: var(--btn-color-text-${type});
    border: 1px solid var(--btn-color-border-${type});
    cursor: pointer;
  `;

  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    padding: 2rem 4rem;
    font-size: 14rem;
    background: none;
    cursor: pointer;
  `;

  return (
    <Container>
      {role === 'button' ? (
        <Button>{children}</Button>
      ) : (
        <Link to={attributes.href}>{children}</Link>
      )}
    </Container>
  );
}

export default ButtonStyled;
