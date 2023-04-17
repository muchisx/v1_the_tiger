import { ArrowUpRight } from '@styled-icons/fluentui-system-filled';
import NavStyled from './styled/NavStyled';
import NavItem from './NavItem';

const navItems = [
  <NavItem text="HOME" key="HOME" to="/" Icon={ArrowUpRight} />,
  <NavItem text="WORK" key="WORK" to="/work" Icon={ArrowUpRight} />,
  <NavItem text="ABOUT" key="ABOUT" to="/about" Icon={ArrowUpRight} />,
  <NavItem text="PLAYGROUND" key="PLAYGROUND" to="/playground" Icon={ArrowUpRight} />,
  <NavItem text="CONTACT" key="CONTACT" to="/contact" Icon={ArrowUpRight} />,
];

function Nav() {
  return <NavStyled navItems={navItems} />;
}

export default Nav;
