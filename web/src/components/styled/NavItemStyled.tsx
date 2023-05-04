import { StyledIcon } from '@styled-icons/styled-icon';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export type StyledProps = {
  text: string;
  to: string;
  Icon?: StyledIcon;
  newTab?: boolean;
  rel?: string;
};

const NavItem = styled.li`
  list-style: none;
`;

const LinkStyled = styled(Link)`
  text-transform: uppercase;
`;

function NavItemStyled(props: StyledProps) {
  const { text, Icon, to, newTab, rel } = props;
  const target = newTab ? '_blank' : '_self';

  return (
    <NavItem className="nav-item">
      <LinkStyled to={to} target={target} rel={rel}>
        <span>
          {text}
          {Icon && <Icon size={24} />}
        </span>
      </LinkStyled>
    </NavItem>
  );
}

NavItemStyled.defaultProps = {
  Icon: undefined,
  newTab: false,
  rel: undefined,
};

export default NavItemStyled;
