// Dependencies
import { useRef } from 'react';
import { useInView } from 'framer-motion';
// Styled Components
import { HeadingStyled, HeadingSpan } from './Heading.styles';
// Types
import { Props } from './Heading.types';

function Heading(props: Props) {
  const { headingLevel = 'h2', children, className, fontWeight = 500, fontSize } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <HeadingStyled as={headingLevel} ref={ref} className={className} $fontWeight={fontWeight} $fontSize={fontSize}>
      <HeadingSpan style={{ opacity: isInView ? 1 : 0, transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s' }}>
        {children}
      </HeadingSpan>
    </HeadingStyled>
  );
}

export default Heading;
