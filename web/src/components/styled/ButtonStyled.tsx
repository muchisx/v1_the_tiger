import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledIcon } from '@styled-icons/styled-icon';
import type { Variant } from '../Button';

type Role = 'link' | 'button';
type ContainerProps = {
  Icon?: StyledIcon;
  variant: Variant;
  text?: string;
};
type IconWrapProps = { text?: string; variant: Variant };
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
  border-radius: ${(props: ContainerProps) => (props.text ? '100px' : '50%')};
  color: var(--btn-color-text-${(props: ContainerProps) => props.variant});
  background: var(--btn-color-bg-${(props: ContainerProps) => props.variant});
  border: 1px solid var(--btn-color-border-${(props: ContainerProps) => props.variant});
  padding: ${(props: ContainerProps) => (props.text ? (props.Icon ? '2rem 2rem 2rem 14rem' : '7rem 14rem') : '6rem')};
`;

const buttonLikeStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  background: none;
  font-size: 14rem;
  line-height: 1;
  cursor: pointer;
`;

const Button = styled.button`
  ${buttonLikeStyles}
`;

const LinkStyled = styled(Link)`
  ${buttonLikeStyles}
  color: inherit;
  text-decoration: none;
`;

const ConditionalIconWrapStyles = css`
  padding: 4px;
  background-color: var(--btn-color-icon-bg-${(props: ContainerProps) => props.variant});
`;

const IconWrap = styled.div<IconWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--btn-color-${(props: IconWrapProps) => (props.text ? `icon-${props.variant}` : `text-${props.variant}`)});
  ${(props: IconWrapProps) => props.text && ConditionalIconWrapStyles}
`;

function ButtonStyled(props: Props) {
  const { role, to, text, variant, Icon } = props;

  return (
    <Container variant={variant} text={text} Icon={Icon}>
      {role === 'button' ? (
        <Button>
          {text}
          {Icon && (
            <IconWrap variant={variant}>
              <Icon size={16} />
            </IconWrap>
          )}
        </Button>
      ) : (
        <LinkStyled to={to ?? ''}>
          {text}
          {Icon && (
            <IconWrap variant={variant} text={text}>
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
