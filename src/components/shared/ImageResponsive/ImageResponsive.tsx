// Dependencies
import { AnimatePresence } from 'framer-motion';
import { forwardRef, useState } from 'react';
// Styled Components
import { Image as ImageStyled, ImageResponsiveStyled } from './ImageResponsive.styles';
// Types
import type { Props } from './ImageResponsive.types';
import ImageSkeleton from '../ImageSkeleton/ImageSkeleton';

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 99999999999);
  // }, []);

  return (
    <ImageResponsiveStyled $width={width} $height={height} $padding={padding} ref={ref} {...attrs}>
      <AnimatePresence>
        {isLoading && (
          <ImageSkeleton initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
        )}
      </AnimatePresence>
      <ImageStyled
        fit={fit}
        src={src}
        loading={loading}
        position={position}
        isLoading={isLoading}
        onLoad={() => setIsLoading(false)}
      />
    </ImageResponsiveStyled>
  );
});

ImageResponsive.displayName = 'ImageResponsive';

export default ImageResponsive;
