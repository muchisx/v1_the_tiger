// Dependencies
import styled from 'styled-components';
// Utils
import { getCSSFromMediaQuery } from '@utils';
// Types
import type { HeadingProps } from './Heading.types';

const HeadingStyled = styled.span<HeadingProps>`
  line-height: 1;
  font-weight: ${(props) => props.$fontWeight};
  ${(props) => props.$fontSize && getCSSFromMediaQuery(props.$fontSize, 'font-size').map((item) => item)};
`;

export default HeadingStyled;
