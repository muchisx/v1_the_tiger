import styled from 'styled-components';
import { motion } from 'framer-motion';

// TODO: Make these props only accept the component NavItem, not any JSX ElementS
type StyledProps = {
  navItems: JSX.Element[];
  subNavItems: JSX.Element[];
  subNavSocials: JSX.Element[];
};

const Nav = styled(motion.nav)`
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

  & .nav-item {
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    overflow: hidden;
  }
  & .nav-item:not(:last-of-type) {
    border-right: 1px solid #d1d1d1;
  }

  & .nav-item:hover {
    background-color: rgba(209, 209, 209, 0.36);
  }

  & .nav-item a {
    height: 100%;
    padding: 24px;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    color: var(--text-primary);
    font-size: 2.4rem;

    @media only screen and (max-width: 768px) {
      font-size: 2rem;
      padding: 20px 24px;
    }
  }

  & .nav-item a span {
    width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
  }

  & .nav-item a svg {
    flex-shrink: 0;
  }
`;

const NavItemsList = styled.ul`
  display: flex;
  flex-grow: 1;
  min-height: 20rem;
  overflow: hidden;
  background-color: white;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    & .nav-item:not(:last-of-type) {
      border-right: none;
      border-bottom: 1px solid #d1d1d1;
    }
  }
`;

const SubNav = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SubNavItemsList = styled.ul`
  display: flex;
  flex-grow: 1;
  border-right: 1px solid #d1d1d1;
  @media only screen and (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #d1d1d1;
  }
`;

const SubNavSocialsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  & .nav-item {
    border-right: 1px solid #d1d1d1;
  }

  & .nav-item a span {
    justify-content: center;
  }
`;

function NavStyled(props: StyledProps) {
  const { navItems, subNavItems, subNavSocials } = props;
  return (
    <Nav>
      <NavItemsList>{...navItems}</NavItemsList>
      <SubNav>
        <SubNavItemsList>{...subNavItems}</SubNavItemsList>
        <SubNavSocialsList>{...subNavSocials}</SubNavSocialsList>
      </SubNav>
    </Nav>
  );
}

export default NavStyled;
