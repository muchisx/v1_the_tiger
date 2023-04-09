import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledIcon } from '@styled-icons/styled-icon';
import type { Variant } from '../Button';

type Role = 'link' | 'button';
type ContainerProps = { variant: Variant; text?: string };
type Props = {
  text?: string;
  role: Role;
  to?: string;
  Icon?: StyledIcon;
} & ContainerProps;

const Container = styled.div<ContainerProps>`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: ${(props: ContainerProps) => (props.text ? '6rem 14rem' : '6rem')};
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
  background: none;
  font-size: 14rem;
  line-height: 1;
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

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${(props) =>
    props.text &&
    `padding: 4px; 
    color: var(--btn-color-text-primary); 
    background-color: var(--btn-color-bg-primary);`}
`;

function ButtonStyled(props: Props) {
  const { role, to, text, variant, Icon } = props;

  return (
    <Container variant={variant} text={text}>
      {role === 'button' ? (
        <Button>
          {text}
          {Icon && (
            <IconWrap>
              <Icon size={16} />
            </IconWrap>
          )}
        </Button>
      ) : (
        <LinkStyled to={to ?? ''}>
          {text}
          {Icon && (
            <IconWrap text={text}>
              <Icon size={16} />
            </IconWrap>
          )}
        </LinkStyled>
      )}
    </Container>
  );
}

ButtonStyled.defaultProps = {
  to: undefined,
  text: undefined,
  Icon: undefined,
};

export default ButtonStyled;
