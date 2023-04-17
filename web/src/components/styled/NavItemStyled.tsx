import { StyledIcon } from '@styled-icons/styled-icon';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
  to: string;
  Icon?: StyledIcon;
};

const NavItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
`;

function NavItemStyled(props: Props) {
  const { text, Icon, to } = props;
  return (
    <NavItem className="nav-item">
      <StyledLink to={to}>
        <span>
          {text}
          {Icon && <Icon size={24} />}
        </span>
      </StyledLink>
    </NavItem>
  );
}

NavItemStyled.defaultProps = {
  Icon: undefined,
};

export default NavItemStyled;
