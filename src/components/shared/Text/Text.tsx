// Dependencies
import { forwardRef } from 'react';
// Types
import { Props } from './Text.types';
// Styled Components
import TextStyled from './Text.styles';

const Text = forwardRef<HTMLParagraphElement, Props>((props, ref) => {
  const {
    children,
    className,
    tag,
    textAlign,
    fontWeight = 400,
    fontSize = '1.6rem',
    fontFamily = 'var(--text-family)',
    ...attrs
  } = props;

  return (
    <TextStyled
      ref={ref}
      as={tag}
      className={className}
      $textAlign={textAlign}
      $fontFamily={fontFamily}
      $fontWeight={fontWeight}
      $fontSize={fontSize}
      {...attrs}
    >
      {children}
    </TextStyled>
  );
});

Text.displayName = 'Text';

export default Text;
