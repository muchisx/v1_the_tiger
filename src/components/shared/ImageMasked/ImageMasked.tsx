// Dependencies
import { type FlattenSimpleInterpolation } from 'styled-components';
// Styled Components
import { Image, ImageMask } from './ImageMasked.styles';
// Types
import type { Height, Width } from '@/types/css.types';

export type Props = {
  width: Width;
  height: Height;
  src: string;
  customStyles?: FlattenSimpleInterpolation;
};

function ImageMasked(props: Props) {
  const { width, height, src, customStyles } = props;
  return (
    <ImageMask $width={width} $height={height} customStyles={customStyles}>
      <Image src={src} />
    </ImageMask>
  );
}

export default ImageMasked;
