// Dependencies
import styled from 'styled-components';
// Types
import type { Props } from './VideoResponsive';

type VideoProps = {
  fit: Props['fit'];
};

type VideoContainerProps = {
  $height: Props['height'];
  $width: Props['width'];
  $padding?: Props['padding'];
};

export const Video = styled.video<VideoProps>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.fit};
`;

export const VideoResponsiveStyled = styled.div<VideoContainerProps>`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  padding: ${(props) => props.$padding};
`;
