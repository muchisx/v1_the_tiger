import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterItem = styled(Link)``;
export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const sectionCSS = css`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;
export const FooterStyled = styled.footer`
  margin-top: auto;
  padding-block: 100px 52px;
`;
