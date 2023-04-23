type Text = {
  text: string;
  text2: string;
};
type Props = {
  text: Text['text'];
};

function HeadingStyled(props) {
  const { headingLevel, text, className } = props;
  const Heading = headingLevel;

  return <Heading className={className}>{text}</Heading>;
}

export default HeadingStyled;
