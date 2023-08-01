// Dependencies
import { useRef, useState } from 'react';
import { type TargetAndTransition } from 'framer-motion';
// Context
import { useMediaQueryContext } from '@context/MediaQueryContext';
// Styled Components
import { SpanStyled, ButtonStyled, ButtonContainerStyled, IconWrap, LinkStyled } from './Button.styles';
// Types
import type { Props } from './Button.types';

function Button(props: Props) {
  const {
    to,
    Icon,
    role,
    text,
    action,
    newTab,
    variant,
    className,
    IconSize = 16,
    IconWrapPadding,
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
    // Only run the animation if me meet the runCondition
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
    <ButtonContainerStyled
      text={text}
      Icon={Icon}
      onClick={action}
      variant={variant}
      className={className}
      isHovered={isHovered}
      IconWrapPadding={IconWrapPadding}
      transition={{ ease: 'easeInOut', duration: 0.2 }}
      onMouseEnter={() => handleTextAndIconHover(isMedium)}
      onMouseLeave={() => handleTextAndIconHover(isMedium)}
      whileHover={singleChildAnimation(isMedium, Icon, text)}
    >
      {role === 'button' ? (
        <ButtonStyled>{buttonContent}</ButtonStyled>
      ) : (
        <LinkStyled to={to ?? ''} target={target} rel={relValue}>
          {buttonContent}
        </LinkStyled>
      )}
    </ButtonContainerStyled>
  );
}

export default Button;
