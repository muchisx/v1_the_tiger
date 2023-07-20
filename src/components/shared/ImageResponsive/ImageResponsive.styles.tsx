import styled from 'styled-components';
import type { ImageContainerProps, ImageProps } from './ImageResponsive.types';

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.fit};
  object-position: ${(props) => props.position};
`;

export const ImageResponsiveStyled = styled.div<ImageContainerProps>`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  padding: ${(props) => props.$padding};
`;
