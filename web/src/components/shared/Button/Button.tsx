import { useRef, useState } from 'react';
import { SpanStyled, ButtonStyled, Container, IconWrap, LinkStyled } from './Button.styles';
import type { Props } from './Button.types';

function Button(props: Props) {
  const {
    role,
    to,
    text,
    variant,
    Icon,
    IconSize = 16,
    IconWrapPadding,
    action,
    className,
    newTab,
    rel = 'noopener noreferrer',
  } = props;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const timeoutRef = useRef<number>();

  const handleHover = () => {
    // A more complex handler is needed for the hover animation so it doesn't break
    // The animation needs a delay on activation if the hover is too fast, it shouldn't happen
    isHoveredRef.current = !isHoveredRef.current;
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIsHovered(isHoveredRef.current);
    }, 50);
  };

  const target = newTab ? '_blank' : '_self';
  const relValue = newTab ? rel : undefined;

  const buttonContent = (
    <>
      {text && <SpanStyled layout>{text}</SpanStyled>}
      {Icon && (
        <IconWrap layout>
          <Icon size={IconSize} />
        </IconWrap>
      )}
    </>
  );

  const hoverAnimation = (buttonIcon?: Props['Icon'], buttonText?: Props['text']) => {
    const animation =
      buttonIcon && buttonText ? undefined : { scale: 1.1, transition: { ease: 'circIn', duration: 0.4 } };
    return animation;
  };

  return (
    <Container
      variant={variant}
      text={text}
      Icon={Icon}
      IconWrapPadding={IconWrapPadding}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      whileHover={hoverAnimation(Icon, text)}
      onClick={action}
      className={className}
      isHovered={isHovered}
    >
      {role === 'button' ? (
        <ButtonStyled>{buttonContent}</ButtonStyled>
      ) : (
        <LinkStyled to={to ?? ''} target={target} rel={relValue}>
          {buttonContent}
        </LinkStyled>
      )}
    </Container>
  );
}

export default Button;
