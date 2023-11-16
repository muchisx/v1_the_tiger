// Dependencies
import { forwardRef, useState } from 'react';
// Styled Components
import ImageSkeleton from '../ImageSkeleton/ImageSkeleton';
import { Image, ImageResponsiveStyled } from './ImageResponsive.styles';
// Types
import type { Props } from './ImageResponsive.types';

const ImageResponsive = forwardRef<HTMLDivElement | HTMLImageElement, Props>(
  (props: Props, ref) => {
    const {
      src,
      width,
      height,
      padding,
      fit = 'cover',
      loading = 'lazy',
      position = 'center',
      refTarget = 'container',
      ...attrs
    } = props;

    const [isLoading, setIsLoading] = useState(true);

    // Dynamically attatch ref target depending on the usage,
    // This allows libraries like framer-motion to target the correct element for animating
    const imageRef = refTarget === 'image' ? ref : undefined;
    const containerRef = refTarget === 'container' ? ref : undefined;

    const imageAttributes = refTarget === 'image' ? attrs : {};
    const containerAttributes = refTarget === 'container' ? attrs : {};

    return (
      <ImageResponsiveStyled
        $width={width}
        $height={height}
        $padding={padding}
        ref={containerRef as React.ForwardedRef<HTMLDivElement>}
        {...containerAttributes}
      >
        {isLoading && <ImageSkeleton ref={imageRef} />}
        <Image
          onLoad={() => setIsLoading(false)}
          fit={fit}
          src={src}
          loading={loading}
          position={position}
          ref={imageRef as React.ForwardedRef<HTMLImageElement>}
          style={{ display: isLoading ? 'none' : 'block' }}
          {...imageAttributes}
        />
      </ImageResponsiveStyled>
    );
  }
);

ImageResponsive.displayName = 'ImageResponsive';

export default ImageResponsive;
