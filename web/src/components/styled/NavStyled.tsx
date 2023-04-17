import styled from 'styled-components';
import { motion } from 'framer-motion';
import NavItem from '../NavItem';

type NavProps = {
  children: React.ReactNode;
};

type Props = {
  navItems: (typeof NavItem)[];
};

const Nav = styled(motion.nav)<NavProps>`
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: absolute;
  z-index: -1;
  inset: 0px 0px auto;
  min-height: 200rem;
  margin-inline: 2%;
  margin-block: 8px;
  background-color: grey;
  border-radius: 8px;
`;

const NavItemsList = styled.ul`
  display: flex;
  padding: 0;
  flex-grow: 1;

  & .nav-item {
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    padding: 28px;
    justify-content: space-between;
    gap: 16px;
  }
  & .nav-item:not(:last-of-type) {
    border-right: 1px solid black;
  }
`;

function NavStyled(props: Props) {
  const { navItems } = props;
  return (
    <Nav>
      <NavItemsList>{...navItems}</NavItemsList>
    </Nav>
  );
}

export default NavStyled;
