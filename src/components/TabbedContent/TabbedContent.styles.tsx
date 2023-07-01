import styled from 'styled-components';

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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TabbedContentStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
