import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkSpan = styled.span`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinkStyled = styled(NavLink)`
  height: 100%;
  padding: 24px;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: var(--text-primary);
  font-size: 2.4rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 20px 24px;
  }
  text-transform: uppercase;
`;

export const NavItemStyled = styled.li`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  overflow: hidden;
  list-style: none;
  /* Using box shadow in combination with overflow hidden on parents to be able to wrap items
    This allows the following:
    - always be able to have the "border" showing regardless of the direction
    - prevent the the double border when border or outlines overlap  */
  box-shadow: 1px -1px 0 rgb(209, 209, 209);

  &:hover {
    background-color: rgba(209, 209, 209, 0.36);
  }

  & ${NavLinkStyled} svg {
    flex-shrink: 0;
  }
`;