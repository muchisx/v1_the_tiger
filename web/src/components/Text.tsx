import TextStyled, { type StyledProps } from './styled/TextStyled';

type Props = {
  children: StyledProps['text'];
  fontWeight?: StyledProps['$fontWeight'];
  tag?: StyledProps['tag'];
  className?: StyledProps['className'];
  fontSize?: StyledProps['$fontSize'];
};

function Text(props: Props) {
  const { tag, children, className, fontWeight, fontSize } = props;

  return <TextStyled text={children} className={className} tag={tag} $fontWeight={fontWeight} $fontSize={fontSize} />;
}

Text.defaultProps = {
  tag: 'p',
  className: undefined,
  fontWeight: 400,
  fontSize: '16rem',
};

export default Text;
