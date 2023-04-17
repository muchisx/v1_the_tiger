import styled from 'styled-components';

const NavItem = styled.li`
  list-style: none;
`;

function NavItemStyled() {
  return (
    <NavItem className="nav-item">
      <span>NAV ITEM</span>
      <span>👉🏼</span>
    </NavItem>
  );
}

export default NavItemStyled;
