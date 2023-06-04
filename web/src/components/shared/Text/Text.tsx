import TextStyled from './Text.styles';
import { Props } from './Text.types';

function Text(props: Props) {
  const { tag = 'p', children, className, fontWeight = 400, fontSize = '1.6rem' } = props;

  return (
    <TextStyled as={tag} className={className} $fontWeight={fontWeight} $fontSize={fontSize}>
      {children}
    </TextStyled>
  );
}

export default Text;
