import { useRef } from 'react';
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

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', '140vh 100vw'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const parallaxController = enableParallax ? { y } : undefined;

  return (
    <Section ref={sectionRef} customStyles={sectionCSS}>
      <ParallaxContainer style={parallaxController}>
        <ImageResponsive width="100%" height="100%" src={src} />
      </ParallaxContainer>
    </Section>
  );
}

export default ImageBanner;
