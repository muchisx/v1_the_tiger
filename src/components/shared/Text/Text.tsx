// Dependencies
import { forwardRef } from 'react';
// Types
import { Props } from './Text.types';
// Styled Components
import TextStyled from './Text.styles';

const Text = forwardRef<HTMLParagraphElement, Props>((props, ref) => {
  const {
    tag,
    children,
    className,
    textAlign,
    textColor,
    fontWeight = 400,
    fontSize = '1.6rem',
    fontFamily = 'var(--text-family)',
    ...attrs
  } = props;

  return (
    <TextStyled
      as={tag}
      ref={ref}
      $fontSize={fontSize}
      className={className}
      $textColor={textColor}
      $textAlign={textAlign}
      $fontFamily={fontFamily}
      $fontWeight={fontWeight}
      {...attrs}
    >
      {children}
    </TextStyled>
  );
});

Text.displayName = 'Text';

export default Text;
