// Dependencies
import styled from 'styled-components';
// Components
import { CardStyled } from '@components/Card/Card.styles';
// Utils
import { getCSSFromMediaQuery, getMediaQueryValue } from '@utils';
// Types
import type { CardGridStyledProps } from './CardGrid.types';

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

export const CardGridFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;

export const CardGridStyled = styled.div<CardGridStyledProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 28vh;
  column-gap: 6rem;
  row-gap: 4rem;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 50vh;
  }

  ${(props) =>
    props.$gridTemplateColumns &&
    getCSSFromMediaQuery(props.$gridTemplateColumns, 'grid-template-columns').map((item) => item)}

  ${(props) => props.$gridAutoRows && getCSSFromMediaQuery(props.$gridAutoRows, 'grid-auto-rows')}

  ${CardStyled} {
    flex-grow: 1;
  }
`;
