import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import Text from '../shared/Text/Text';

export const ImageMaskedCSS = css`
  position: absolute;
  right: 0;
  top: 0;
`;

export const ButtonsHeading = styled(Text)`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BackgroundShape = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  opacity: 0.1;
  z-index: -1;
  transform: rotate(180deg);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionCSS = css`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2.4rem;
    padding-top: 12px;
    overflow: hidden;

    .split-content__first ${ButtonsContainer} {
      margin-top: 4rem;
      @media only screen and (max-width: 768px) {
        max-width: 50%;
      }
    }
  }

  ${SubSection} {
    position: relative;
    flex: 1;
  }
`;
