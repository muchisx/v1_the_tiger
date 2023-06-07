import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Variants } from 'framer-motion';
import { CardContainerProps } from './Card.types';

// Styled Components

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
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
  background-color: #1d1f21;
  color: white;
  padding: 12px;
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const CardHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 2rem;
  row-gap: 1.2rem;

  > * {
    // This fixes overflow issues
    min-width: 0;
  }

  & ${HeaderIconWrap} {
    grid-area: 1 / 1 / 3 / 2;
  }

  @media only screen and (max-width: 600px) {
    & ${HeaderIconWrap} {
      grid-area: 1 / 1 / 2 / 2;
    }
    ${TagsContainer} {
      grid-area: 2 / 1 / -1 / -1;
    }
  }
`;

export const CardBgImg = styled(motion.img)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  background-color: var(--neutral-color);
  border: 1px solid var(--neutral-color-secondary);

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
