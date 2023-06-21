import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import Text from '../shared/Text/Text';
import type { SubSectionProps } from './SplitContent.types';

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

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
`;

export const SubSection = styled.div<SubSectionProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${(props) =>
    props.maskedImageURL &&
    css`
      ${ButtonsContainer} {
        @media only screen and (max-width: 768px) {
          max-width: 50%;
        }
      }
    `}
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
    padding-block: 40px;
    overflow: hidden;

    .split-content__first ${ButtonsContainer} {
      margin-top: 4rem;
    }
  }

  ${SubSection} {
    position: relative;
    flex: 1;
  }
`;
