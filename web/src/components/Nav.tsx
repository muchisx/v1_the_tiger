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

const subNavItems = [<NavItem text="404" key="404" to="/notfound" Icon={ArrowUpRight} />];

const subNavSocials = [
  <NavItem newTab rel="noopener noreferrer" text="IG" key="IG" to="https://instagram.com/imiguel.angel" />,
  <NavItem newTab rel="noopener noreferrer" text="IN" key="IN" to="https://www.linkedin.com/in/miguelangelpro/" />,
  <NavItem newTab rel="noopener noreferrer" text="GIT" key="GIT" to="https://github.com/muchisx" />,
];

function Nav() {
  return <NavStyled navItems={navItems} subNavItems={subNavItems} subNavSocials={subNavSocials} />;
}

export default Nav;
