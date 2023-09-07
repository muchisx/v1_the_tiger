// Dependencies
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Types
import type { ContainerProps } from './Button.types';

export const ButtonStyled = styled(motion.button)``;
export const LinkStyled = styled(motion(Link))``;
export const SpanStyled = styled(motion.span)``;
export const IconWrap = styled(motion.div)``;
export const ButtonContainerStyled = styled(motion.div)<ContainerProps>`
  flex-shrink: 0;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${(props) => (props.text ? '100px' : '50%')};
  color: var(--btn-color-text-${(props) => props.variant});
  background: var(--btn-color-bg-${(props) => props.variant});
  border: 1px solid var(--btn-color-border-${(props) => props.variant});
  padding: ${(props) => (props.text ? (props.Icon ? '.2rem .2rem .2rem 1.4rem' : '.7rem 1.4rem') : '.6rem')};
  transition: padding 200ms ease-in-out;

  ${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
      user-select: none;
    `}

  &:hover {
    ${(props) => props.isHovered && props.text && props.Icon && 'padding: .2rem 1.4rem .2rem .2rem '};
  }

  & ${IconWrap} {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: ${(props) => props.IconWrapPadding};
    color: var(--btn-color-${(props) => (props.text ? `icon-${props.variant}` : `text-${props.variant}`)});
    ${(props) =>
      props.text &&
      css`
        padding: 4px;
        background-color: var(--btn-color-icon-bg-${props.variant});
      `}
  }

  & ${LinkStyled}, ${ButtonStyled} {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: none;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    ${(props) =>
      props.isHovered &&
      props.Icon &&
      props.text &&
      css`
        flex-direction: row-reverse;
      `}
  }

  & ${LinkStyled} {
    color: inherit;
    text-decoration: none;
  }

  & ${SpanStyled} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
  }
`;
