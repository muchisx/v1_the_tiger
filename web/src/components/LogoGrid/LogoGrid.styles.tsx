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
  outline: 1px solid var(--neutral-color);
`;

export const sectionCSS = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .logo-grid__heading {
    text-align: center;
  }
`;
