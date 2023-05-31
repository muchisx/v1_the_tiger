import styled from 'styled-components';
import { CardContainerProps } from './Card.types';

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HeaderIconWrap = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
  background-color: #1d1f21;
  color: white;
  padding: 12px;
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
  row-gap: 1.2rem;

  > * {
    // This fixes overflow issues
    min-width: 0;
  }

  & ${HeaderIconWrap} {
    grid-area: 1 / 1 / 3 / 2;
  }

  @media only screen and (max-width: 600px) {
    & ${HeaderIconWrap} {
      grid-area: 1 / 1 / 2 / 2;
    }
    ${TagsContainer} {
      grid-area: 2 / 1 / -1 / -1;
    }
  }
`;

export const CardStyled = styled.article<CardContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px;
  border-radius: 10px;
  background-color: var(--neutral-color);
  border: 1px solid var(--neutral-color-secondary);

  ${(props) => props.customStyles}
`;
