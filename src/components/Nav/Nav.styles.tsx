import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SubNavSocialsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  & li.nav-item a span {
    justify-content: center;
  }
`;

export const SubNavItemsList = styled.ul`
  display: flex;
  flex-grow: 1;
`;

export const SubNav = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  min-height: 20rem;
  overflow: hidden;
  background-color: white;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
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