import TextStyled from './Text.styles';
import { Props } from './Text.types';

function Text(props: Props) {
  const { tag, children, className, fontWeight, fontSize } = props;

  return (
    <TextStyled as={tag} className={className} $fontWeight={fontWeight} $fontSize={fontSize}>
      {children}
    </TextStyled>
  );
}

Text.defaultProps = {
  tag: 'p',
  className: undefined,
  fontWeight: 400,
  fontSize: '1.6rem',
};
export default Text;
