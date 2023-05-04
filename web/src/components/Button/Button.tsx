import { useState } from 'react';
import { SpanStyled, ButtonStyled, Container, IconWrap, LinkStyled } from './Button.styles';
import type { Props } from './Button.types';

function Button(props: Props) {
  const { role, to, text, variant, Icon, action, className, newTab, rel } = props;
  const target = newTab ? '_blank' : '_self';
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((current: boolean) => !current);
  };

  const buttonContent = (
    <>
      {text && <SpanStyled layout>{text}</SpanStyled>}
      {Icon && (
        <IconWrap layout>
          <Icon size={16} />
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
        <LinkStyled to={to ?? ''} target={target} rel={rel}>
          {buttonContent}
        </LinkStyled>
      )}
    </Container>
  );
}

Button.defaultProps = {
  text: undefined,
  className: undefined,
  Icon: undefined,
};

export default Button;
