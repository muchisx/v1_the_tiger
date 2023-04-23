import styled from 'styled-components';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps = { fontWeight?: StyledProps['fontWeight'] };
export type StyledProps = {
  text: string | JSX.Element;
  fontWeight?: number | undefined;
  headingLevel?: HeadingLevel;
  className?: string;
};

const Heading = styled.span<HeadingProps>`
  line-height: 1;
  font-family: var(--heading-family);
  font-weight: ${(props) => props.fontWeight};
`;

function HeadingStyled(props: StyledProps) {
  const { headingLevel, text, className, fontWeight } = props;

  return (
    <Heading as={headingLevel} className={className} fontWeight={fontWeight}>
      {text}
    </Heading>
  );
}

HeadingStyled.defaultProps = {
  headingLevel: 'h2',
  className: undefined,
  fontWeight: 500,
};

export default HeadingStyled;
