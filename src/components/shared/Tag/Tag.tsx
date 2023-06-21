// Dependencies
import styled from 'styled-components';
// Types
import type { Variant } from '../Button/Button.types';

export type Props = {
  variant: Variant;
  children: string;
};

const Tag = styled.span<Props>`
  width: fit-content;
  height: fit-content;
  font-size: 1.4rem;
  padding: 0.2rem 1.6rem;
  border-radius: 160rem;
  white-space: nowrap;
  color: var(--btn-color-text-${(props) => props.variant});
  background: var(--btn-color-bg-${(props) => props.variant});
  border: 1px solid var(--btn-color-border-${(props) => props.variant});

  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Tag;
