import HeadingStyled, { type StyledProps } from './styled/HeadingStyled';

type Props = StyledProps;

function Heading(props: Props) {
  const { headingLevel, text, className, fontWeight } = props;

  return <HeadingStyled text={text} className={className} headingLevel={headingLevel} fontWeight={fontWeight} />;
}

export default Heading;
