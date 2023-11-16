// Dependencies
import styled from 'styled-components';
// Types
import type { ImageContainerProps, ImageProps } from './ImageResponsive.types';
import ImageSkeleton from '../ImageSkeleton/ImageSkeleton';

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.fit};
  object-position: ${(props) => props.position};
`;

export const ImageResponsiveStyled = styled.div<ImageContainerProps>`
  position: relative;
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  padding: ${(props) => props.$padding};

  ${ImageSkeleton} {
    inset: 0;
    position: absolute;
  }
`;
