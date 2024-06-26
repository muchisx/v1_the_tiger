// Dependencies
import { useEffect, useMemo, useRef, useState } from 'react';
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
  const animatedLettersRef = useRef(0);
  const [animated, setAnimated] = useState(false);

  const childrenModified = useMemo(() => {
    const { node, nodesModifiedTotal } = getDeepModifiedNode(children, (nodeItem) =>
      wrapNodeLetterInTag(nodeItem, 'span')
    );
    animatedLettersRef.current = nodesModifiedTotal;
    return node;
  }, [children]);

  useEffect(() => {
    if (isInView) {
      const staggerDuration = Math.min(1.6 / animatedLettersRef.current, 0.032);

      animate(
        'span.letter',
        { y: ['-40%', '0%'], opacity: [0, 1], filter: ['blur(4px)', 'blur(0px)'] },
        { delay: stagger(staggerDuration), type: 'tween' }
        // Removes transform and filter css properties once the animation finishes to improve performance
      ).then(() => setAnimated(true));
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
      <HeadingSpan ref={scope} animated={animated}>
        {childrenModified}
      </HeadingSpan>
    </HeadingStyled>
  );
}

export default Heading;
