import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImageSkeleton = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--neutral-color);
  border-radius: 4px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(231, 231, 231, 1) 0,
      rgba(255, 255, 255, 0.28) 50%,
      rgba(255, 255, 255, 0.12) 88%,
      rgba(231, 231, 231, 1)
    ); // 231, 231, 231 is equal to var(--neutral-color);

    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export default ImageSkeleton;
