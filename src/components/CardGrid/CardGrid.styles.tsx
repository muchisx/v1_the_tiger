import styled from 'styled-components';
import { CardStyled } from '../Card/Card.styles';
import type { CardGridStyledProps } from './CardGrid.types';
import getCSSFromMediaQuery from '../../utils/getCSSFromMediaQuery';

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

export const CardGridStyled = styled.div<CardGridStyledProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vh;
  column-gap: 6rem;
  row-gap: 4rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 28vh;
  }

  ${(props) =>
    props.$gridTemplateColumns &&
    getCSSFromMediaQuery(props.$gridTemplateColumns, 'grid-template-columns').map((item) => item)}

  ${(props) => props.$gridAutoRows && getCSSFromMediaQuery(props.$gridAutoRows, 'grid-auto-rows').map((item) => item)}

  ${CardStyled} {
    flex-grow: 1;
  }
`;
