import styled from 'styled-components';
import type { HeadingProps } from './Heading.types';

const HeadingStyled = styled.span<HeadingProps>`
  line-height: 1;
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
`;

export default HeadingStyled;
