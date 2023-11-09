// Dependencies
import styled from 'styled-components';
import { motion, type Variants } from 'framer-motion';
// Components
import Logo from '@components/shared/Logo/Logo';
import NavItem from '@components/NavItem/NavItem';
// Utils
import { getMediaQueryValue } from '@utils';

export const LogoStyled = styled(Logo)`
  padding: 20px 24px;
  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    display: none;
  }
`;

export const SubNavSocialsList = styled(motion.ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  & li.nav-item a span {
    justify-content: center;
  }
`;

export const SubNavItemsList = styled(motion.ul)`
  display: flex;
  flex-grow: 1;
`;

export const SubNav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex-direction: row;
  }
`;

export const NavItemMotion = motion(NavItem);

export const NavItemsList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  min-height: 20rem;
  overflow: hidden;
  background-color: white;
  border-radius: 8px;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex-direction: row;
  }
`;

export const NavStyled = styled(motion.nav)`
  display: flex;
  gap: 24px;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  inset: 0px 0px auto;
  margin-inline: 2%;
  margin-block: 8px;

  & ul {
    padding: 0;
  }
`;

// Animation Variants - Framer Motion

const MAIN_DURATION = 0.4;
const MAIN_CHILDREN_DELAY = 0.24;

const ITEMS_DURATION = 0.32;
const ITEMS_STAGGER = 0.1;

export const navItemsVariants: Variants = {
  closed: {
    y: '-100%',
    opacity: 0,
    filter: 'blur(8px)',
    transition: { duration: ITEMS_DURATION, bounce: false },
  },
  open: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: ITEMS_DURATION, bounce: false },
  },
};

export const navItemsListVariants: Variants = {
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
  open: {
    transition: { staggerChildren: ITEMS_STAGGER },
  },
};

export const socialNavItemsListVariants: Variants = {
  closed: {
    transition: { staggerChildren: 0 },
  },
  open: {
    transition: { staggerChildren: 0 },
  },
};

export const navVariants: Variants = {
  closed: {
    y: '-100%',
    opacity: 0,
    transition: { duration: MAIN_DURATION, bounce: false },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: MAIN_DURATION,
      bounce: false,
      delayChildren: MAIN_CHILDREN_DELAY,
      staggerChildren: ITEMS_DURATION - 0.08,
    },
  },
};
