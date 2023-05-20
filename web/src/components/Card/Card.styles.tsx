import styled from 'styled-components';

export const HeaderIcon = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
  background-color: #1d1f21;
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const CardHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 2rem;

  & ${HeaderIcon} {
    grid-area: 1 / 1 / 3 / 2;
  }
`;

export const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 10px;
  background-color: var(--neutral-color);
`;
