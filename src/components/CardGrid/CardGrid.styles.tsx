import styled from 'styled-components';
import { CardStyled } from '../Card/Card.styles';

export const CardGridCellBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const CardGridCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vh;
  column-gap: 6rem;
  row-gap: 4rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 28vh;
  }

  ${CardStyled} {
    flex-grow: 1;
  }
`;
