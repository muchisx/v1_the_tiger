// Dependencies
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
// import { useSpring } from 'framer-motion';
// Components
import Text from '@components/shared/Text/Text';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageResponsive from '@components/shared/ImageResponsive/ImageResponsive';
// Styled Components
import {
  sectionCSS,
  BottomDetails,
  ContentBottom,
  ContentContainer,
  ParallaxContainer,
  ImageBannerContainer,
} from './ImageBanner.styles';
// Types
import type { Props } from './imageBanner.types';

function ImageBanner(props: Props) {
  const { customStyles, src, minHeight, enableParallax, imgOverlayColor, heading, bottomContent } = props;

  // 1️⃣ Parallax animation handlers
  // -------------------------- --------------------------
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', '140vh end'] });
  const yRange = useTransform(scrollYProgress, [0, 1], ['-24%', '0%']);
  // TODO: --------------------Fix useSpring not working for parallax spring
  // --------------------------const y = useSpring(yRange, { stiffness: 400, damping: 90 });
  const parallaxController = enableParallax ? yRange : undefined;
  // -------------------------- --------------------------

  // 2️⃣ Render Validations
  // -------------------------- --------------------------
  // Check if any of the children exist before rendering it's parent
  const renderContentBottom = bottomContent;
  const renderContent = renderContentBottom || heading;
  // -------------------------- --------------------------

  return (
    <Section ref={sectionRef} customStyles={sectionCSS.concat(customStyles)}>
      <ImageBannerContainer $minHeight={minHeight} $imgOverlayColor={imgOverlayColor}>
        <ParallaxContainer style={{ y: parallaxController }}>
          <ImageResponsive width="100%" height="100%" src={src} />
        </ParallaxContainer>
      </ImageBannerContainer>

      {renderContent && (
        <ContentContainer>
          {heading && <Heading {...heading} />}

          {renderContentBottom && (
            <ContentBottom>
              {bottomContent &&
                bottomContent.map((item) => (
                  <BottomDetails key={item.title}>
                    <Text fontWeight={500}>{item.title}</Text>
                    <Text>{item.info}</Text>
                  </BottomDetails>
                ))}
            </ContentBottom>
          )}
        </ContentContainer>
      )}
    </Section>
  );
}

export default ImageBanner;
