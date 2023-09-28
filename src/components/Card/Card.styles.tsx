// Dependencies
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Variants } from 'framer-motion';
// Components
import ImageResponsive from '@components/shared/ImageResponsive/ImageResponsive';
// Utils
import { getMediaQueryValue } from '@utils';
// Types
import { CardContainerProps, CardHeaderProps } from './Card.types';

export const CardFooter = styled.div`
  display: flex;
  gap: 12px;
  width: fit-content;
  margin-top: auto;
  margin-left: auto;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HeaderIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #1d1f21;
  color: white;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const CardHeader = styled.header<CardHeaderProps>`
  grid-template-rows: auto auto;
  display: grid;

  > * {
    // This fixes overflow issues
    min-width: 0;
  }

  ${TagsContainer} {
    grid-area: 2 / 1 / -1 / -1;
    flex-wrap: wrap;
  }

  ${(props) => {
    switch (props.headerLayout) {
      case 'compact':
        return css`
          grid-template-columns: 1fr auto;
          column-gap: 1.6rem;
          row-gap: 0.8rem;

          ${HeaderIconWrap} {
            grid-area: 1 / 2 / 3 / 2;
            width: 4rem;
            height: 4rem;
            padding: 8px;
          }
        `;

      default:
        return css`
          grid-template-columns: auto 1fr;
          column-gap: 2rem;
          row-gap: 1.2rem;

          & ${HeaderIconWrap} {
            grid-area: 1 / 1 / 2 / 2;
            width: 8rem;
            height: 8rem;
            padding: 12px;

            svg {
              width: 84%;
              height: 84%;
            }
          }

          @media only screen and (min-width: ${getMediaQueryValue('md')}) {
            & ${HeaderIconWrap} {
              grid-area: 1 / 1 / 3 / 2;
            }
            ${TagsContainer} {
              grid-area: initial;
            }
          }
        `;
    }
  }}
`;

export const CardBgImg = styled(motion(ImageResponsive))`
  position: absolute;
  inset: 0;
  z-index: -2;
`;

export const CardLinkWrap = styled(Link)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const CardStyled = styled(motion.article)<CardContainerProps>`
  --border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px;
  position: relative;
  border-radius: var(--border-radius);
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'var(--neutral-color)')};
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : 'var(--neutral-color-secondary)')};

  overflow: hidden;
  isolation: isolate;

  ${(props) => props.customStyles}
`;

// Animation Variants - Framer Motion

export const bgImgMotionMedium: Variants = {
  hover: {
    scale: 1.1,
  },
};
