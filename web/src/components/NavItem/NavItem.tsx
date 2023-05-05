import { type StyledIcon } from '@styled-icons/styled-icon';
import { LinkStyled, NavItemStyled } from './NavItem.styles';

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
      <LinkStyled to={to} target={target} rel={relValue}>
        <span>
          {text}
          {Icon && <Icon size={24} />}
        </span>
      </LinkStyled>
    </NavItemStyled>
  );
}

NavItem.defaultProps = {
  Icon: undefined,
  newTab: false,
  rel: 'noopener noreferrer',
};

export default NavItem;
