// Dependencies
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// Utils
import { getMediaQueryValue } from '../../utils';

export const NavLinkSpan = styled.span`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinkStyled = styled(NavLink)`
  height: 100%;
  padding: 20px 24px;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  font-size: 2rem;
  color: var(--text-primary);

  &.active {
    pointer-events: none;
    color: var(--navlink-text-active);
    background-color: var(--navlink-bg-active);
  }

  &:not(.active):hover {
    background-color: var(--neutral-color-secondary);
  }

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    font-size: 2.4rem;
    padding: 24px;
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
  box-shadow: 1px -1px 0 var(--neutral-color-quaternary);

  & ${NavLinkStyled} svg {
    flex-shrink: 0;
  }
`;
