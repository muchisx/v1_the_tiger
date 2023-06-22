// Styled Components
import { Image, ImageContainer } from './ImageResponsive.styles';

// Types
import type { Width, Height } from '../../../types/css.types';

export type Props = {
  height: Height;
  width: Width;
  src: string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  padding?: string;
  loading?: 'eager' | 'lazy';
};

function ImageResponsive(props: Props) {
  const { height, width, fit = 'cover', padding, src, loading = 'lazy' } = props;

  return (
    <ImageContainer $height={height} $width={width} $padding={padding}>
      <Image fit={fit} src={src} loading={loading} />
    </ImageContainer>
  );
}

export default ImageResponsive;