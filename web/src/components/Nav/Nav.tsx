import { ArrowUpRight } from '@styled-icons/fluentui-system-filled';
import { NavStyled, NavItemsList, SubNav, SubNavItemsList, SubNavSocialsList } from './Nav.styles';
import NavItem from '../NavItem/NavItem';

const navItems = [
  <NavItem text="HOME" key="HOME" to="/" Icon={ArrowUpRight} />,
  <NavItem text="WORK" key="WORK" to="/work" Icon={ArrowUpRight} />,
  <NavItem text="SERVICES" key="SERVICES" to="/services" Icon={ArrowUpRight} />,
  <NavItem text="ABOUT" key="ABOUT" to="/about" Icon={ArrowUpRight} />,
  <NavItem text="CONTACT" key="CONTACT" to="/contact" Icon={ArrowUpRight} />,
];

const subNavItems = [<NavItem text="PLAYGROUND" key="PLAYGROUND" to="/playground" Icon={ArrowUpRight} />];

const subNavSocials = [
  <NavItem newTab text="IG" key="IG" to="https://instagram.com/imiguel.angel" />,
  <NavItem newTab text="IN" key="IN" to="https://www.linkedin.com/in/miguelangelpro/" />,
  <NavItem newTab text="GIT" key="GIT" to="https://github.com/muchisx" />,
];

function Nav() {
  return (
    <NavStyled>
      <NavItemsList>{...navItems}</NavItemsList>
      <SubNav>
        <SubNavItemsList>{...subNavItems}</SubNavItemsList>
        <SubNavSocialsList>{...subNavSocials}</SubNavSocialsList>
      </SubNav>
    </NavStyled>
  );
}

export default Nav;
