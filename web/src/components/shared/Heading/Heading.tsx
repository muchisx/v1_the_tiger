// Types
import { Props } from './Heading.types';
// Styled Components
import HeadingStyled from './Heading.styles';

function Heading(props: Props) {
  const { headingLevel = 'h2', text, className, fontWeight = 500, fontSize } = props;

  return (
    <HeadingStyled as={headingLevel} className={className} $fontWeight={fontWeight} $fontSize={fontSize}>
      {text}
    </HeadingStyled>
  );
}

export default Heading;
