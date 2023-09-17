// Dependencies
import styled from 'styled-components';
// Types
import type { TextProps } from './Text.types';

const TextStyled = styled.p<TextProps>`
  font-family: ${(props) => props.$fontFamily};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  text-align: ${(props) => props.$textAlign};
  color: ${(props) => props.$textColor};
`;

export default TextStyled;
