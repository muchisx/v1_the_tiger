// Dependencies
import styled, { css } from 'styled-components';
import type { TabStyledProps } from './Tab.types';
// Utils
import { getMediaQueryValue } from '../../../utils';

export const TabAnchor = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 24px;

  color: inherit;
  text-decoration: none;

  svg {
    flex-shrink: 0;
    height: 2.4rem;
    width: 2.4rem;
    color: var(--text-tertiary);
  }

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    padding: 24px 32px;
    justify-content: center;

    svg {
      display: none;
    }
  }
`;

export const TabStyled = styled.li<TabStyledProps>`
  display: none;
  flex: 1;

  font-size: 2.4rem;
  text-transform: uppercase;
  list-style: none;
  user-select: none;
  box-shadow: -1px 1px 0 var(--neutral-color-quaternary);

  ${(props) =>
    props.isActive
      ? css`
          color: var(--text-tertiary);
          background-color: var(--body-bg-color-secondary);
          ${TabAnchor} {
            @media only screen and (min-width: ${getMediaQueryValue('md')}) {
              pointer-events: none;
            }
          }
        `
      : css`
          &:hover {
            background-color: var(--neutral-color-secondary);
          }
        `}

  // In mobile they will be hidden by default
  ${(props) =>
    (props.isShown || props.isActive) &&
    css`
      display: flex;
    `}

  // In desktop they will show by default
  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    display: flex;
  }
`;
