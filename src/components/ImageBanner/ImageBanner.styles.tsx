// Dependencies
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
// Utils
import { getCSSFromMediaQuery } from '@utils';
// Types
import type { ContainerProps } from './imageBanner.types';
import ImageSkeleton from '../shared/ImageSkeleton/ImageSkeleton';

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
  padding: 80px var(--gutter-contained) 40px;

  color: var(--body-text-tertiary);
`;

export const ImageBannerContainer = styled.div<ContainerProps>`
  height: 0;
  min-height: 324px;
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

  ${(props) =>
    props.$minHeight && getCSSFromMediaQuery(props.$minHeight, 'min-height').map((item) => item)}
`;

export const sectionCSS = css`
  display: flex;
  position: relative;
  overflow: hidden;

  img,
  ${ImageSkeleton} {
    height: 120%;
    object-position: center;
  }
`;
