// Dependencies
import styled from 'styled-components';
// Utils
import { getMediaQueryValue } from '@utils';
// Styled Components
import { ButtonContainerStyled } from '@components/shared/Button/Button.styles';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 36px;
  border-radius: 8px;
  border: 1px solid var(--neutral-color);

  ${ButtonContainerStyled} {
    margin-top: auto;
  }

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    gap: 36px;
  }
`;

export const Media = styled.div`
  display: flex;
  min-height: 200px;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--neutral-color);

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex: 1 0 68%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const TabbedContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    gap: 60px;
  }
`;
