import styled from 'styled-components';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import TextStyled from '../Text/Text.styles';
import { HeadingStyled } from '../Heading/Heading.styles';

export const QuestionIcon = styled.span`
  --icon-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--icon-size);
  height: var(--icon-size);

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const QuestionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  height: 100%;
  padding-block: var(--global-padding);
  text-align: left;
  cursor: pointer;
  background-color: transparent;

  ${HeadingStyled} {
    transition: color 0.2s ease-in-out;
  }
  :hover {
    ${HeadingStyled} {
      color: var(--neutral-color-quaternary);
    }
  }
`;

export const QuestionContainer = styled(motion.dt)`
  display: flex;
`;

export const AnswerContainer = styled(motion.dd)`
  display: flex;
  overflow: hidden;

  > ${TextStyled} {
    padding-bottom: var(--global-padding);
  }
`;

export const AccordionItemContainer = styled(motion.div)`
  --global-padding: 16px;
  display: flex;
  flex-direction: column;

  border-top: 1px solid var(--neutral-color-quaternary);

  :last-child {
    border-bottom: 1px solid var(--neutral-color-quaternary);
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
