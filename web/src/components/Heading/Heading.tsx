import HeadingStyled from './Heading.styles';
import { Props } from './Heading.types';

function Heading(props: Props) {
  const { headingLevel, text, className, fontWeight, fontSize } = props;

  return (
    <HeadingStyled as={headingLevel} className={className} $fontWeight={fontWeight} $fontSize={fontSize}>
      {text}
    </HeadingStyled>
  );
}

Heading.defaultProps = {
  headingLevel: 'h2',
  className: undefined,
  fontWeight: 500,
  fontSize: undefined,
};

export default Heading;
