// Dependencies
import styled, { css } from 'styled-components';

export const Grid = styled.div`
  --grid-column-count: 6;
  --grid-item--min-width: 140px;
  --grid-item--max-width: calc((100%) / var(--grid-column-count));
  display: flex;
  flex-wrap: wrap;
  outline: 1px solid var(--neutral-color);
  border-radius: 8px;
  overflow: hidden;
`;

export const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 152px;
  width: var(--grid-item--max-width);
  min-width: var(--grid-item--min-width);
  padding: 12px;
  /* Using box shadow in combination with overflow hidden on parents to be able to wrap items
    This allows the following:
    - always be able to have the "border" showing regardless of the direction
    - prevent the the double border when border or outlines overlap  */
  box-shadow: 1px -1px 0 var(--neutral-color);
`;

export const sectionCSS = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  .logo-grid__heading {
    text-align: center;
  }
`;
