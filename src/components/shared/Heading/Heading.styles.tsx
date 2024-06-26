// Dependencies
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
// Utils
import { getCSSFromMediaQuery } from '@utils';
// Types
import type { HeadingProps, HeadingSpanProps } from './Heading.types';

export const HeadingSpan = styled(motion.span)<HeadingSpanProps>`
  ${(props) =>
    props.animated &&
    // Removes transform and filter css properties once the animation finishes to improve performance
    css`
      span.letter {
        transform: none !important;
        filter: none !important;
      }
    `}
`;

export const HeadingStyled = styled.h1<HeadingProps>`
  line-height: 1.15;
  font-weight: ${(props) => props.$fontWeight};
  ${(props) =>
    props.$fontSize && getCSSFromMediaQuery(props.$fontSize, 'font-size').map((item) => item)};

  .letter {
    display: inline-block;
    // Initial styles for animation
    opacity: 0;
    filter: blur(4px);
    transform: translateY(-40%) translateZ(0px);
  }
  .word {
    display: inline-block;

    span {
      white-space: break-spaces;
    }
  }
`;
