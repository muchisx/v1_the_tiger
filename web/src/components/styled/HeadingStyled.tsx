import styled from 'styled-components';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps = { $fontWeight?: StyledProps['$fontWeight']; $fontSize?: StyledProps['$fontSize'] };
export type StyledProps = {
  text: string | JSX.Element;
  $fontWeight?: number;
  $fontSize?: string;
  headingLevel?: HeadingLevel;
  className?: string;
};

const Heading = styled.span<HeadingProps>`
  line-height: 1;
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
`;

function HeadingStyled(props: StyledProps) {
  const { headingLevel, text, className, $fontWeight, $fontSize } = props;

  return (
    <Heading as={headingLevel} className={className} $fontWeight={$fontWeight} $fontSize={$fontSize}>
      {text}
    </Heading>
  );
}

HeadingStyled.defaultProps = {
  headingLevel: 'h2',
  className: undefined,
  $fontWeight: 500,
  $fontSize: undefined,
};

export default HeadingStyled;
