import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
// Types
import type { ContainerProps } from './imageBanner.types';

export const ParallaxContainer = styled(motion.div)`
  height: 100%;
`;

export const ImageBannerContainer = styled.div<ContainerProps>`
  width: 100%;

  --height: ${(props) => props.$height || '560px'};
  height: var(--height);

  @media only screen and (max-width: 768px) {
    height: calc(var(--height) * 0.68);
  }
`;

export const sectionCSS = css`
  display: flex;
  overflow: hidden;

  img {
    height: 110%;
    object-position: center;
  }

  @media only screen and (max-width: 768px) {
    img {
      object-position: 90%;
    }
  }
`;
