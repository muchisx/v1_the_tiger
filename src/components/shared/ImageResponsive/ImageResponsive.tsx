// Dependencies
import { forwardRef } from 'react';
// Styled Components
import { Image, ImageResponsiveStyled } from './ImageResponsive.styles';
// Types
import type { Props } from './ImageResponsive.types';

const ImageResponsive = forwardRef<HTMLDivElement | HTMLImageElement, Props>((props: Props, ref) => {
  const { height, width, fit = 'cover', padding, src, loading = 'lazy', refTarget = 'container', ...attrs } = props;

  // Dynamically attatch ref target depending on the usage,
  // This allows libraries like framer-motion to target the correct element for animating
  const imageRef = refTarget === 'image' ? ref : undefined;
  const containerRef = refTarget === 'container' ? ref : undefined;

  return (
    <ImageResponsiveStyled
      {...attrs}
      $height={height}
      $width={width}
      $padding={padding}
      ref={containerRef as React.ForwardedRef<HTMLDivElement>}
    >
      <Image fit={fit} src={src} loading={loading} ref={imageRef as React.ForwardedRef<HTMLImageElement>} {...attrs} />
    </ImageResponsiveStyled>
  );
});

ImageResponsive.displayName = 'ImageResponsive';

export default ImageResponsive;
