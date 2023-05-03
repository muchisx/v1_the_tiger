import { type ReactNode } from 'react';
import styled from 'styled-components';

type TextProps = { $fontWeight?: StyledProps['$fontWeight']; $fontSize?: StyledProps['$fontSize'] };
export type StyledProps = {
  text: ReactNode;
  $fontWeight?: number;
  $fontSize?: string;
  tag?: Tag;
  className?: string;
};

const Text = styled.p<TextProps>`
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
`;

function TextStyled(props: StyledProps) {
  const { tag, text, className, $fontWeight, $fontSize } = props;

  return (
    <Text as={tag} className={className} $fontWeight={$fontWeight} $fontSize={$fontSize}>
      {text}
    </Text>
  );
}

export default TextStyled;

type Tag =
  | 'abbr'
  | 'b'
  | 'cite'
  | 'code'
  | 'samp'
  | 'var'
  | 'dd'
  | 'dl'
  | 'dt'
  | 'del'
  | 'em'
  | 'i'
  | 'ins'
  | 'label'
  | 'mark'
  | 'q'
  | 's'
  | 'small'
  | 'span'
  | 'strong'
  | 'sub'
  | 'sup'
  | 'time'
  | 'u'
  | 'pre';
