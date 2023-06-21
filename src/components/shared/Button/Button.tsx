// Dependencies
import { useRef, useState } from 'react';
// Types
import type { TargetAndTransition } from 'framer-motion';
import type { Props } from './Button.types';
// Context
import { useMediaQueryContext } from '../../../context/MediaQueryContext';
// Styled Components
import { SpanStyled, ButtonStyled, Container, IconWrap, LinkStyled } from './Button.styles';

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

  // 1️⃣ Target and Rel setters for when button is a 'link'
  // -------------------------- --------------------------
  const target = newTab ? '_blank' : '_self';
  const relValue = newTab ? rel : undefined;
  // -------------------------- --------------------------

  // 2️⃣ MediaQuery context hook for validation animation runs
  // ---> Dependencies 3️⃣ & 4️⃣
  // -------------------------- --------------------------
  const { isMedium } = useMediaQueryContext();
  // -------------------------- --------------------------

  // 3️⃣ Animation handler for when both text and icon are present
  // -------------------------- --------------------------
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const timeoutRef = useRef<number>();

  const handleTextAndIconHover = (runCondition: boolean) => {
    // Only run the animation if the media query is above Medium
    if (!runCondition) return;
    // A more complex handler is needed for the hover animation so it doesn't break
    // The animation needs a delay on activation if the hover is too fast, it shouldn't happen
    isHoveredRef.current = !isHoveredRef.current;
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIsHovered(isHoveredRef.current);
    }, 50);
  };
  // -------------------------- --------------------------

  // 4️⃣ Animation handler for when there's only one child (Text or Icon), but not both
  // -------------------------- --------------------------
  const singleChildAnimation = (runCondition: boolean, buttonIcon?: Props['Icon'], buttonText?: Props['text']) => {
    // Only run the animation if the media query is above Medium
    if (!runCondition) return {};

    // TODO: Standarize the color of the background shadow via variables
    const motion: TargetAndTransition = { scale: 1.04, boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.22)' };
    const animation = buttonIcon && buttonText ? {} : motion;
    return animation;
  };
  // -------------------------- --------------------------

  // 5️⃣ Reusable Button Content
  // -------------------------- --------------------------
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
  // -------------------------- --------------------------

  return (
    <Container
      variant={variant}
      text={text}
      Icon={Icon}
      IconWrapPadding={IconWrapPadding}
      onMouseEnter={() => handleTextAndIconHover(isMedium)}
      onMouseLeave={() => handleTextAndIconHover(isMedium)}
      whileHover={singleChildAnimation(isMedium, Icon, text)}
      transition={{ ease: 'easeInOut', duration: 0.2 }}
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
