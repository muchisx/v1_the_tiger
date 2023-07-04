import styled from 'styled-components';
import type { Props } from './ImageResponsive';

type ImageProps = {
  fit: Props['fit'];
};

type ImageContainerProps = {
  $height: Props['height'];
  $width: Props['width'];
  $padding?: Props['padding'];
};

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.fit};
`;

export const ImageResponsiveStyled = styled.div<ImageContainerProps>`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  padding: ${(props) => props.$padding};
`;
