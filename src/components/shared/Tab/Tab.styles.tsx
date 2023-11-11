// Dependencies
import styled, { css } from 'styled-components';
// Utils
import { getMediaQueryValue } from '@utils';
// Types
import type { TabStyledProps } from './Tab.types';

export const TabAnchor = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 24px;

  color: inherit;
  text-decoration: none;
  cursor: pointer;

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
  display: flex;
  flex: 1; // turn this one off if coming back from non-motion

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
`;
