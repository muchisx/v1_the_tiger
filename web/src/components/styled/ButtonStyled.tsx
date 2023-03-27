import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import type { Variant } from '../Button';

type Role = 'link' | 'button';
type ContainerProps = { variant: Variant };
type Props = {
  text: string;
  role: Role;
  to?: string;
} & ContainerProps;

const Container = styled.div<ContainerProps>`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 2rem 8rem;
  border-radius: 100px;
  color: var(--btn-color-text-${(props: ContainerProps) => props.variant});
  background: var(--btn-color-bg-${(props: ContainerProps) => props.variant});
  border: 1px solid var(--btn-color-border-${(props: ContainerProps) => props.variant});
`;

const ButtonLikeStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  padding: 2rem 4rem;
  background: none;
  font-size: 14rem;
  cursor: pointer;
`;

const Button = styled.button`
  ${ButtonLikeStyles}
`;

const LinkStyled = styled(Link)`
  ${ButtonLikeStyles}
  color: inherit;
  text-decoration: none;
`;

function ButtonStyled(props: Props) {
  const { role, to, text, variant } = props;

  return (
    <Container variant={variant}>
      {role === 'button' ? (
        <Button>
          {text} <span>👉🏼</span>
        </Button>
      ) : (
        <LinkStyled to={to ?? ''}>
          {text} <span>👉🏼</span>
        </LinkStyled>
      )}
    </Container>
  );
}

ButtonStyled.defaultProps = {
  to: '',
};

export default ButtonStyled;
