// Dependencies
import styled from 'styled-components';
// Utils
import { getMediaQueryValue } from '../../utils';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 32px 36px;
  border-radius: 8px;
  border: 1px solid var(--neutral-color);
`;

export const Media = styled.div`
  display: flex;
  min-height: 200px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--neutral-color);

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex: 1 0 68%;
    max-height: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex-direction: row;
  }
`;

export const TabbedContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    gap: 60px;
  }
`;
