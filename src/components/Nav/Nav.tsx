// Dependencies
import { ArrowUpRight } from '@styled-icons/fluentui-system-filled';
// Context
import { useMediaQueryContext } from '@context/MediaQueryContext';
// Styled Components
import {
  SubNav,
  NavStyled,
  LogoStyled,
  navVariants,
  NavItemsList,
  NavItemMotion,
  SubNavItemsList,
  navItemsVariants,
  SubNavSocialsList,
  navItemsListVariants,
  socialNavItemsListVariants,
} from './Nav.styles';

const mainNavItems = [
  { text: 'HOME', to: '/' },
  { text: 'WORK', to: '/work' },
  { text: 'SERVICES', to: '/services' },
  { text: 'ABOUT', to: '/about' },
  { text: 'CONTACT', to: '/contact' },
];
const subNavItems = [{ text: 'PLAYGROUND', to: '/playground' }];
const socialNavItems = [
  { text: 'IG', to: 'https://instagram.com/imiguel.angel' },
  { text: 'IN', to: 'https://www.linkedin.com/in/miguelangelpro/' },
  { text: 'GIT', to: 'https://github.com/muchisx' },
];

function Nav() {
  const { isMedium } = useMediaQueryContext();

  return (
    <NavStyled initial="closed" animate="open" exit="closed" variants={navVariants}>
      <NavItemsList variants={navItemsListVariants}>
        <LogoStyled isUppercase fontSize="2rem" />
        {mainNavItems.map((item) => (
          <NavItemMotion
            to={item.to}
            key={item.text}
            text={item.text}
            Icon={ArrowUpRight}
            variants={navItemsVariants}
          />
        ))}
      </NavItemsList>
      <SubNav>
        <SubNavItemsList variants={navItemsListVariants}>
          {subNavItems.map((item) => (
            <NavItemMotion
              to={item.to}
              key={item.text}
              text={item.text}
              Icon={ArrowUpRight}
              variants={navItemsVariants}
            />
          ))}
        </SubNavItemsList>
        <SubNavSocialsList variants={isMedium ? navItemsListVariants : socialNavItemsListVariants}>
          {socialNavItems.map((item) => (
            <NavItemMotion newTab to={item.to} key={item.text} text={item.text} variants={navItemsVariants} />
          ))}
        </SubNavSocialsList>
      </SubNav>
    </NavStyled>
  );
}

export default Nav;
