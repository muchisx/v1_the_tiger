import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import type { Variant } from '../Button';

type Role = 'link' | 'button';
type ContainerProps = { variant: Variant; text?: string };
type Props = {
  text?: string;
  role: Role;
  to?: string;
} & ContainerProps;

const Container = styled.div<ContainerProps>`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: ${(props: ContainerProps) => (props.text ? '2rem 8rem' : '2rem')};
  border-radius: ${(props: ContainerProps) => (props.text ? '100px' : '50%')};
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
    <Container variant={variant} text={text}>
      {role === 'button' ? (
        <Button>
          {text}
          <ArrowRight size={14} />
        </Button>
      ) : (
        <LinkStyled to={to ?? ''}>
          {text}
          <ArrowRight size={14} />
        </LinkStyled>
      )}
    </Container>
  );
}

ButtonStyled.defaultProps = {
  to: undefined,
  text: undefined,
};

export default ButtonStyled;
