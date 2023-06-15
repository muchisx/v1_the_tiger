// Types
import { type FlattenSimpleInterpolation } from 'styled-components';
// Styled Components
import { Image, ImageMask } from './ImageMasked.styles';

export type Props = {
  width: number;
  height: number;
  src: string;
  css?: FlattenSimpleInterpolation;
};

function ImageMasked(props: Props) {
  const { width, height, src, css } = props;
  return (
    <ImageMask $width={width} $height={height} css={css}>
      <Image src={src} />
    </ImageMask>
  );
}

export default ImageMasked;
