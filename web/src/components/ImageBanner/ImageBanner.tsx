import { motion, useScroll, useTransform } from 'framer-motion';
import { css } from 'styled-components';
import ImageResponsive from '../ImageResponsive/ImageResponsive';
import Section from '../Section/Section';

type Props = {
  src: string;
};

const sectionCSS = css`
  height: 560px;
  overflow: hidden;

  img {
    object-position: center;
  }

  @media only screen and (max-width: 768px) {
    height: 360px;
    img {
      height: 400px;
      object-position: 90%;
    }
  }
`;

function ImageBanner(props: Props) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  const { src } = props;
  return (
    <Section css={sectionCSS}>
      <motion.div style={{ y }}>
        <ImageResponsive width="100%" fit="cover" height="640px" src={src} />
      </motion.div>
    </Section>
  );
}

export default ImageBanner;
