import { useScroll, useTransform } from 'framer-motion';
import ImageResponsive from '../shared/ImageResponsive/ImageResponsive';
import Section from '../shared/Section/Section';
import { ParallaxContainer, sectionCSS } from './ImageBanner.styles';

type Props = {
  src: string;
  enableParallax?: boolean;
};

function ImageBanner(props: Props) {
  const { src, enableParallax } = props;

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const parallaxController = enableParallax ? { y } : undefined;

  return (
    <Section customStyles={sectionCSS}>
      <ParallaxContainer style={parallaxController}>
        <ImageResponsive width="100%" fit="cover" height="100%" src={src} />
      </ParallaxContainer>
    </Section>
  );
}

ImageBanner.defaultProps = {
  enableParallax: false,
};

export default ImageBanner;
