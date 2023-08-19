// Dependencies
import { ArrowUpRight } from '@styled-icons/fluentui-system-filled';
// Components
import NavItem from '@components/NavItem/NavItem';
// Styled Components
import { NavStyled, NavItemsList, SubNav, SubNavItemsList, SubNavSocialsList, LogoStyled } from './Nav.styles';

function Nav() {
  return (
    <NavStyled>
      <NavItemsList>
        <LogoStyled isUppercase fontSize="2rem" />
        <NavItem text="HOME" key="HOME" to="/" Icon={ArrowUpRight} />
        <NavItem text="WORK" key="WORK" to="/work" Icon={ArrowUpRight} />
        <NavItem text="SERVICES" key="SERVICES" to="/services" Icon={ArrowUpRight} />
        <NavItem text="ABOUT" key="ABOUT" to="/about" Icon={ArrowUpRight} />
        <NavItem text="CONTACT" key="CONTACT" to="/contact" Icon={ArrowUpRight} />
      </NavItemsList>
      <SubNav>
        <SubNavItemsList>
          <NavItem text="PLAYGROUND" key="PLAYGROUND" to="/playground" Icon={ArrowUpRight} />
        </SubNavItemsList>
        <SubNavSocialsList>
          <NavItem newTab text="IG" key="IG" to="https://instagram.com/imiguel.angel" />
          <NavItem newTab text="IN" key="IN" to="https://www.linkedin.com/in/miguelangelpro/" />
          <NavItem newTab text="GIT" key="GIT" to="https://github.com/muchisx" />
        </SubNavSocialsList>
      </SubNav>
    </NavStyled>
  );
}

export default Nav;
