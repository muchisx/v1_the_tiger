import HeadingStyled, { type StyledProps } from './styled/HeadingStyled';

type Props = StyledProps;

function Heading(props: Props) {
  const { headingLevel, text, className, $fontWeight, $fontSize } = props;

  return (
    <HeadingStyled
      text={text}
      className={className}
      headingLevel={headingLevel}
      $fontWeight={$fontWeight}
      $fontSize={$fontSize}
    />
  );
}

export default Heading;
