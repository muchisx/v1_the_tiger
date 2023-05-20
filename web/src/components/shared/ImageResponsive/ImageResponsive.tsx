import { Image, ImageContainer } from './ImageResponsive.styles';

export type Props = {
  height: string;
  width: string;
  src: string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  padding?: string;
  loading?: 'eager' | 'lazy';
};

function ImageResponsive(props: Props) {
  const { height, width, fit, padding, src, loading } = props;

  return (
    <ImageContainer $height={height} $width={width} $padding={padding}>
      <Image fit={fit} src={src} loading={loading} />
    </ImageContainer>
  );
}

ImageResponsive.defaultProps = {
  fit: 'cover',
  padding: undefined,
  loading: 'lazy',
};

export default ImageResponsive;
