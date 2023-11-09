// Dependencies
import { forwardRef } from 'react';
// Types
import { type StyledIcon } from '@styled-icons/styled-icon';
// Styled Components
import { NavLinkStyled, NavItemStyled, NavLinkSpan } from './NavItem.styles';

type Props = {
  text: string;
  to: string;
  Icon?: StyledIcon;
  newTab?: boolean;
  rel?: string;
};

const NavItem = forwardRef<HTMLLIElement, Props>((props: Props, ref) => {
  const { text, Icon, to, newTab, rel = 'noopener noreferrer' } = props;
  const target = newTab ? '_blank' : '_self';
  const relValue = newTab ? rel : undefined;

  return (
    <NavItemStyled className="nav-item" ref={ref}>
      <NavLinkStyled to={to} target={target} rel={relValue} end>
        <NavLinkSpan>
          {text}
          {Icon && <Icon size={24} />}
        </NavLinkSpan>
      </NavLinkStyled>
    </NavItemStyled>
  );
});

NavItem.displayName = 'NavItem';

export default NavItem;
