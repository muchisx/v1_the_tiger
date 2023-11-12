// Dependencies
import styled from 'styled-components';
import { motion, type Variants } from 'framer-motion';
// Utils
import { getMediaQueryValue } from '@utils';
// Components
import Tab from '@components/shared/Tab/Tab';
import Tabs from '@components/shared/Tabs/Tabs';
// Styled Components
import { ButtonContainerStyled } from '@components/shared/Button/Button.styles';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 36px;
  border-radius: 8px;
  border: 1px solid var(--neutral-color);

  ${ButtonContainerStyled} {
    margin-top: auto;
  }

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    gap: 36px;
  }
`;

export const Media = styled.div`
  display: flex;
  min-height: 200px;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--neutral-color);

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex: 1 0 68%;
  }
`;

export const TabMotion = motion(Tab);
export const TabsMotion = motion(Tabs);

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const TabbedContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    gap: 60px;
  }
`;

// Animation Variants - Framer Motion

const OPEN_DURATION = 0.4;
const CLOSE_DURATION = 0.2;

export const TabVariants: Variants = {
  open: {
    opacity: 1,
    maxHeight: 150,
    filter: 'blur(0px)',
    transition: {
      bounce: false,
      duration: OPEN_DURATION,
    },
  },
  closed: {
    opacity: 0,
    maxHeight: 0,
    filter: 'blur(8px)',
    transition: {
      bounce: false,
      duration: CLOSE_DURATION,
    },
  },
};

export const ContentVariants: Variants = {
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: OPEN_DURATION,
    },
  },
  hidden: {
    opacity: 0,
    filter: 'blur(4px)',
    transition: {
      duration: CLOSE_DURATION,
    },
  },
};
