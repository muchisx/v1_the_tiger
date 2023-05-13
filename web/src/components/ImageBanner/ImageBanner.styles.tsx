import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const sectionCSS = css`
  display: flex;
  height: 560px;
  overflow: hidden;

  img {
    height: 110%;
    object-position: center;
  }

  @media only screen and (max-width: 768px) {
    height: 360px;

    img {
      object-position: 90%;
    }
  }
`;

export const ParallaxContainer = styled(motion.div)`
  width: 100%;
`;
