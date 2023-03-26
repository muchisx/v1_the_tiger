import styled from 'styled-components';
import { Link } from 'react-router-dom';

type ContainerProps = {
  type: string;
};

type Props = {
  text: string;
  role: string;
  to?: string;
} & ContainerProps;

const Container = styled.div<ContainerProps>`
  background: var(--btn-color-bg-${(props: ContainerProps) => props.type});
  border-radius: 100px;
  padding: 2rem 8rem;
  color: var(--btn-color-text-${(props: ContainerProps) => props.type});
  border: 1px solid
    var(--btn-color-border-${(props: ContainerProps) => props.type});
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

function ButtonStyled(props: Props) {
  const { role, to, text, type } = props;

  return (
    <Container type={type}>
      {role === 'button' ? (
        <Button>
          {text} <span>👉🏼</span>{' '}
        </Button>
      ) : (
        <Link to={to ?? ''}>
          {text} <span>👉🏼</span>
        </Link>
      )}
    </Container>
  );
}

ButtonStyled.defaultProps = {
  to: '',
};

export default ButtonStyled;
