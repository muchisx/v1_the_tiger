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
  const animatedLettersRef = useRef(0);

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
        // TODO - Find a better performance tweak that doesn't generate a warning
        // TODO - or find a way to supress the warning
        // Removes transform and filter css properties once the animation finishes to improve performance
      ).then(() => animate('span.letter', { y: 'none', filter: 'none' }, { duration: 0 }));
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
