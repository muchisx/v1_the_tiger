import NavStyled from './styled/NavStyled';
import NavItem from './NavItem';

const navItems = [<NavItem />, <NavItem />];

function Nav() {
  return <NavStyled navItems={navItems} />;
}

export default Nav;
