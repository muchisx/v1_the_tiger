import { Image, ImageContainer } from './ImageResponsive.styles';

export type Props = {
  height: string;
  width: string;
  src: string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  padding?: string;
};

function ImageResponsive(props: Props) {
  const { height, width, fit, padding, src } = props;

  return (
    <ImageContainer height={height} width={width} padding={padding}>
      <Image fit={fit} src={src} />
    </ImageContainer>
  );
}

ImageResponsive.defaultProps = {
  fit: 'cover',
  padding: undefined,
};

export default ImageResponsive;
