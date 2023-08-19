import styled from 'styled-components';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import TextStyled from '../Text/Text.styles';

export const QuestionButton = styled.button`
  width: 100%;
  height: 100%;
  padding-block: var(--block-padding);
  cursor: pointer;
  background-color: transparent;
`;

export const QuestionContainer = styled(motion.dt)`
  display: flex;
`;

export const AnswerContainer = styled(motion.dd)`
  display: flex;
  overflow: hidden;

  ${TextStyled} {
    padding-bottom: var(--block-padding);
  }
`;

export const AccordionItemContainer = styled(motion.div)`
  --block-padding: 16px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid grey;

  :last-child {
    border-bottom: 1px solid grey;
  }
`;

export const AccordionList = styled.dl`
  display: flex;
  flex-direction: column;
`;

// Animation Variants - Framer Motion

export const AccordionItemMotionVariants: Variants = {
  open: { opacity: 1, height: 'auto' },
  collapsed: { opacity: 0, height: 0 },
};
