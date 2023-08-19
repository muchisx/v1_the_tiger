// Styled Components
import HeadingStyled from './Heading.styles';
// Types
import { Props } from './Heading.types';

function Heading(props: Props) {
  const { headingLevel = 'h2', children, className, fontWeight = 500, fontSize } = props;

  return (
    <HeadingStyled as={headingLevel} className={className} $fontWeight={fontWeight} $fontSize={fontSize}>
      {children}
    </HeadingStyled>
  );
}

export default Heading;
