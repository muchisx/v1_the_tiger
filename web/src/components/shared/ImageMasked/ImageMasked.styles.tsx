import styled from 'styled-components';
import { type Props } from './ImageMasked';

type ImageMaskProps = {
  $width: Props['width'];
  $height: Props['height'];
  css?: Props['css'];
};

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageMask = styled.div<ImageMaskProps>`
  border-radius: 50%;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  overflow: hidden;
  box-shadow: 2px 2px 0rem 0px rgb(25 25 25 / 72%);
  ${(props) => props.css}
`;
