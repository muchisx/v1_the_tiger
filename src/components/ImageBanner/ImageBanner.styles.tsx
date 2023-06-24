// Dependencies
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
// Types
import type { ContainerProps } from './imageBanner.types';
import { Height } from '../../types/css.types';

export const ParallaxContainer = styled(motion.div)`
  height: 100%;
`;

export const BottomDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 40px;
  justify-content: space-between;
  padding-top: 20px;

  border-top: 1px solid var(--neutral-color-tertiary);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  inset: 0;
  padding: 80px var(--gutter) 40px;

  color: var(--body-text-tertiary);
`;

export const ImageBannerContainer = styled.div<ContainerProps>`
  --height: ${(props): Height => props.$height || '560px'};
  height: var(--height);
  width: 100%;

  ${(props) =>
    props.$imgOverlayColor &&
    css`
      position: relative;
      isolation: isolate;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: ${props.$imgOverlayColor};
        z-index: 1;
      }
    `}

  @media only screen and (max-width: 768px) {
    height: calc(var(--height) * 0.68);
  }
`;

export const sectionCSS = css`
  display: flex;
  position: relative;
  overflow: hidden;

  img {
    height: 110%;
    object-position: center;
  }
`;
