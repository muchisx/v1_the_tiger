import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StyledIcon } from '@styled-icons/styled-icon';

export type StyledProps = {
  className?: string;
  text?: string;
  role: Role;
  to?: string;
  Icon?: StyledIcon;
  action?: () => void;
  variant: Variant;
  handleHover: () => void;
  isHovered: boolean;
};
type Role = 'button' | 'link';
type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
type ContainerProps = { Icon?: StyledProps['Icon']; variant: StyledProps['variant']; text?: StyledProps['text'] };
type IconWrapProps = { text?: StyledProps['text']; variant: StyledProps['variant'] };
type ButtonLikeProps = {
  $text?: StyledProps['text'];
  $Icon?: StyledProps['Icon'];
  $isHovered: StyledProps['isHovered'];
};

const buttonLikeStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  background: none;
  font-size: 14rem;
  line-height: 1;
  cursor: pointer;

  ${(props: ButtonLikeProps) =>
    props.$isHovered &&
    props.$Icon &&
    props.$text &&
    css`
      flex-direction: row-reverse;
    `}
`;

const Button = styled(motion.button)<ButtonLikeProps>`
  ${buttonLikeStyles}
`;

const LinkStyled = styled(motion(Link))<ButtonLikeProps>`
  ${buttonLikeStyles}
  color: inherit;
  text-decoration: none;
`;

const Span = styled(motion.span)`
  line-height: 1;
`;

const ConditionalIconWrapStyles = css`
  padding: 4px;
  background-color: var(--btn-color-icon-bg-${(props: IconWrapProps) => props.variant});
`;

const IconWrap = styled(motion.div)<IconWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--btn-color-${(props: IconWrapProps) => (props.text ? `icon-${props.variant}` : `text-${props.variant}`)});
  ${(props: IconWrapProps) => props.text && ConditionalIconWrapStyles}
`;

const Container = styled(motion.div)<ContainerProps>`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border-radius: ${(props: ContainerProps) => (props.text ? '100px' : '50%')};
  color: var(--btn-color-text-${(props: ContainerProps) => props.variant});
  background: var(--btn-color-bg-${(props: ContainerProps) => props.variant});
  border: 1px solid var(--btn-color-border-${(props: ContainerProps) => props.variant});
  padding: ${(props: ContainerProps) => (props.text ? (props.Icon ? '2rem 2rem 2rem 14rem' : '7rem 14rem') : '6rem')};
  transition: padding 200ms ease-in-out;

  &:hover {
    ${(props: ContainerProps) => props.text && props.Icon && 'padding: 2rem 14rem 2rem 2rem '};
  }
`;

function ButtonStyled(props: StyledProps) {
  const { role, to, text, variant, Icon, handleHover, isHovered, action, className } = props;

  const buttonContent = (
    <>
      {text && <Span layout>{text}</Span>}
      {Icon && (
        <IconWrap variant={variant} text={text} layout>
          <Icon size={16} />
        </IconWrap>
      )}
    </>
  );

  const hoverAnimation = (buttonIcon: StyledIcon | undefined, buttonText: string | undefined) => {
    const animation = buttonIcon && buttonText ? undefined : { scale: 1.1 };
    return animation;
  };

  return (
    <Container
      variant={variant}
      text={text}
      Icon={Icon}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      whileHover={hoverAnimation(Icon, text)}
      onClick={action}
      className={className}
    >
      {role === 'button' ? (
        <Button $isHovered={isHovered} $text={text} $Icon={Icon}>
          {buttonContent}
        </Button>
      ) : (
        <LinkStyled to={to ?? ''} $isHovered={isHovered} $text={text} $Icon={Icon}>
          {buttonContent}
        </LinkStyled>
      )}
    </Container>
  );
}

ButtonStyled.defaultProps = {
  to: undefined,
  text: undefined,
  className: undefined,
  Icon: undefined,
  action: undefined,
};

export default ButtonStyled;
