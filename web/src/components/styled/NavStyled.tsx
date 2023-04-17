import styled from 'styled-components';
import { motion } from 'framer-motion';

// TODO: Make these props only accept the component NavItem, not any JSX ElementS
type Props = {
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
    font-size: 24rem;
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
  min-height: 200rem;
  flex-grow: 1;
  overflow: hidden;
  background-color: white;
  border-radius: 8px;
`;

const SubNav = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
`;

const SubNavItemsList = styled.ul`
  display: flex;
  flex-grow: 1;
  border-right: 1px solid #d1d1d1;
`;

const SubNavSocialsList = styled.ul`
  flex: 0 0 25%;
  display: flex;

  & .nav-item {
    flex: 1 1 100%;
  }
  & .nav-item a span {
    justify-content: center;
  }
`;

function NavStyled(props: Props) {
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
