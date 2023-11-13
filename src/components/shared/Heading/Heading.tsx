// Dependencies
import { useEffect, useMemo, useRef } from 'react';
import { useAnimate, useInView, stagger } from 'framer-motion';
// Utils
import getDeepModifiedNode from '@utils/getDeepModifiedNode';
import wrapNodeLetterInTag from '@utils/wrapNodeLetterInTag';
// Styled Components
import { HeadingStyled, HeadingSpan } from './Heading.styles';
// Types
import { Props } from './Heading.types';

function Heading(props: Props) {
  const { headingLevel = 'h2', children, className, fontWeight = 500, fontSize } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });
  const [scope, animate] = useAnimate();

  const childrenModified = useMemo(() => {
    return getDeepModifiedNode(children, (node) => wrapNodeLetterInTag(node, 'span'));
  }, [children]);

  useEffect(() => {
    if (isInView) {
      animate(
        'span.letter',
        { y: ['-40%', '0%'], opacity: [0, 1], filter: ['blur(4px)', 'blur(0px)'] },
        { delay: stagger(0.03), type: 'tween' }
      );
    }
  }, [isInView, animate]);

  return (
    <HeadingStyled
      ref={ref}
      as={headingLevel}
      className={className}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
    >
      <HeadingSpan ref={scope}>{childrenModified}</HeadingSpan>
    </HeadingStyled>
  );
}

export default Heading;
