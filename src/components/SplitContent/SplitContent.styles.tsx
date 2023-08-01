// Dependencies
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
// Components
import Text from '@components/shared/Text/Text';
// Utils
import { getMediaQueryValue } from '@utils';
// Types
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
        max-width: 50%;
        @media only screen and (min-width: ${getMediaQueryValue('md')}) {
          max-width: none;
        }
      }
    `}
`;

export const BackgroundShape = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.1;
  z-index: -1;
  transform: rotate(180deg);

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    width: 50%;
  }
`;

export const SectionCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
  position: relative;
  overflow: hidden;

  .split-content__first ${ButtonsContainer} {
    margin-top: 4rem;
  }

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex-direction: row;
    gap: 6rem;
    padding-block: 56px;
    overflow: visible;

    .split-content__first ${ButtonsContainer} {
      margin-top: auto;
    }
  }

  ${SubSection} {
    position: relative;
    flex: 1;
  }
`;
