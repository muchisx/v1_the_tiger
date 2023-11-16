// Dependencies
import { forwardRef, useEffect, useRef, useState } from 'react';
// Styled Components
import ImageSkeleton from '../ImageSkeleton/ImageSkeleton';
import { Image as ImageStyled, ImageResponsiveStyled } from './ImageResponsive.styles';
// Types
import type { Props } from './ImageResponsive.types';

const ImageResponsive = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const {
    src,
    width,
    height,
    padding,
    fit = 'cover',
    loading = 'lazy',
    position = 'center',
    ...attrs
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <ImageResponsiveStyled $width={width} $height={height} $padding={padding} ref={ref} {...attrs}>
      {isLoading && <ImageSkeleton ref={imageRef} />}
      <ImageStyled
        onLoad={() => setIsLoading(false)}
        fit={fit}
        src={src}
        loading={loading}
        position={position}
        ref={imageRef}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </ImageResponsiveStyled>
  );
});

ImageResponsive.displayName = 'ImageResponsive';

export default ImageResponsive;
