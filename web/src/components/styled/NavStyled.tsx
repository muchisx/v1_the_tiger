import styled from 'styled-components';
import { motion } from 'framer-motion';

// TODO: Make these props only accept the component NavItem, not any JSX ElementS
type Props = {
  navItems: JSX.Element[];
};

const Nav = styled(motion.nav)`
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: absolute;
  inset: 0px 0px auto;
  min-height: 200rem;
  margin-inline: 2%;
  margin-block: 8px;
  background-color: white;
  border-radius: 8px;
`;

const NavItemsList = styled.ul`
  display: flex;
  padding: 0;
  flex-grow: 1;
  overflow: hidden;

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

function NavStyled(props: Props) {
  const { navItems } = props;
  return (
    <Nav>
      <NavItemsList>{...navItems}</NavItemsList>
    </Nav>
  );
}

export default NavStyled;
