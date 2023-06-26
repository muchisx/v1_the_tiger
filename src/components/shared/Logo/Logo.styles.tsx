import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { WordWrapProps } from './Logo.types';

export const LetterSpan = styled.span`
  font-weight: 500;
`;
export const WordWrap = styled.div<WordWrapProps>`
  display: flex;
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};
  color: var(--logo-${(props) => (props.index === 0 ? 'primary' : 'secondary')});
`;
export const LogoStyled = styled(Link)`
  display: flex;
  padding: 2px;
  gap: 8px;
  font-family: var(--heading-family);
  font-size: 22px;
  text-decoration: none;
`;
