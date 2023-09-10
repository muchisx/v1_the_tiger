// Types
import { Props } from './Text.types';
// Styled Components
import TextStyled from './Text.styles';

function Text(props: Props) {
  const {
    children,
    className,
    tag = 'p',
    fontWeight = 400,
    fontSize = '1.6rem',
    fontFamily = 'var(--text-family)',
  } = props;

  return (
    <TextStyled as={tag} className={className} $fontFamily={fontFamily} $fontWeight={fontWeight} $fontSize={fontSize}>
      {children}
    </TextStyled>
  );
}

export default Text;
