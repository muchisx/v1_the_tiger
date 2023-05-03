import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StyledIcon } from '@styled-icons/styled-icon';

type Role = 'button' | 'link';
type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
type ContainerProps = {
  Icon?: StyledProps['Icon'];
  variant: StyledProps['variant'];
  text?: StyledProps['text'];
  isHovered: StyledProps['isHovered'];
};
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

const Button = styled(motion.button)``;
const LinkStyled = styled(motion(Link))``;
const Span = styled(motion.span)``;
const IconWrap = styled(motion.div)``;
const Container = styled(motion.div)<ContainerProps>`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border-radius: ${(props) => (props.text ? '100px' : '50%')};
  color: var(--btn-color-text-${(props) => props.variant});
  background: var(--btn-color-bg-${(props) => props.variant});
  border: 1px solid var(--btn-color-border-${(props) => props.variant});
  padding: ${(props) => (props.text ? (props.Icon ? '.2rem .2rem .2rem 1.4rem' : '.7rem .4rem') : '.6rem')};
  transition: padding 200ms ease-in-out;

  &:hover {
    ${(props) => props.text && props.Icon && 'padding: .2rem 1.4rem .2rem .2rem '};
  }

  & ${IconWrap} {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--btn-color-${(props) => (props.text ? `icon-${props.variant}` : `text-${props.variant}`)});
    ${(props) =>
      props.text &&
      css`
        padding: 4px;
        background-color: var(--btn-color-icon-bg-${props.variant});
      `}
  }

  & ${LinkStyled}, ${Button} {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: none;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    ${(props) =>
      props.isHovered &&
      props.Icon &&
      props.text &&
      css`
        flex-direction: row-reverse;
      `}
  }

  & ${LinkStyled} {
    color: inherit;
    text-decoration: none;
  }

  & ${Span} {
    line-height: 1;
  }
`;

function ButtonStyled(props: StyledProps) {
  const { role, to, text, variant, Icon, handleHover, isHovered, action, className } = props;

  const buttonContent = (
    <>
      {text && <Span layout>{text}</Span>}
      {Icon && (
        <IconWrap layout>
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
      isHovered={isHovered}
    >
      {role === 'button' ? <Button>{buttonContent}</Button> : <LinkStyled to={to ?? ''}>{buttonContent}</LinkStyled>}
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
