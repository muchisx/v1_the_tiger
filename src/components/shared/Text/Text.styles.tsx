// Dependencies
import styled from 'styled-components';
// Types
import type { TextProps } from './Text.types';

const TextStyled = styled.p<TextProps>`
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
`;

export default TextStyled;
