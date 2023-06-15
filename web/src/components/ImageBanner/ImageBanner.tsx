// Dependencies
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
// import { useSpring } from 'framer-motion';
// Components
import Section from '../shared/Section/Section';
import ImageResponsive from '../shared/ImageResponsive/ImageResponsive';
// Styled Components
import { ParallaxContainer, sectionCSS } from './ImageBanner.styles';

// Types
type Props = {
  src: string;
  enableParallax?: boolean;
};

function ImageBanner(props: Props) {
  const { src, enableParallax } = props;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', '140vh end'] });
  const yRange = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  // TODO: Fix useSpring not working for parallax spring
  // const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  const parallaxController = enableParallax ? yRange : undefined;

  return (
    <Section ref={sectionRef} customStyles={sectionCSS}>
      <ParallaxContainer style={{ y: parallaxController }}>
        <ImageResponsive width="100%" height="100%" src={src} />
      </ParallaxContainer>
    </Section>
  );
}

export default ImageBanner;
