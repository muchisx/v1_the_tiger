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

function NavItem(props: Props) {
  const { text, Icon, to, newTab, rel = 'noopener noreferrer' } = props;
  const target = newTab ? '_blank' : '_self';
  const relValue = newTab ? rel : undefined;

  return (
    <NavItemStyled className="nav-item">
      <NavLinkStyled to={to} target={target} rel={relValue}>
        <NavLinkSpan>
          {text}
          {Icon && <Icon size={24} />}
        </NavLinkSpan>
      </NavLinkStyled>
    </NavItemStyled>
  );
}

export default NavItem;
