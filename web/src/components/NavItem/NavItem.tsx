import { type StyledIcon } from '@styled-icons/styled-icon';
import { NavLinkStyled, NavItemStyled, NavLinkSpan } from './NavItem.styles';

type Props = {
  text: string;
  to: string;
  Icon?: StyledIcon;
  newTab?: boolean;
  rel?: string;
};

function NavItem(props: Props) {
  const { text, Icon, to, newTab, rel } = props;
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

NavItem.defaultProps = {
  Icon: undefined,
  newTab: false,
  rel: 'noopener noreferrer',
};

export default NavItem;
