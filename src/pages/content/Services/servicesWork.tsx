/* eslint-disable max-len */
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';
import type { Props as SplitContentProps } from '@/components/SplitContent/SplitContent.types';

const servicesWork: SplitContentProps = {
  leftContent: {
    topTag: {
      variant: 'tertiary',
      children: 'Work',
    },
  },
  rightContent: {
    rightHeading: {
      children: (
        <>
          <span>
            SOME OF
            <SpanSpace />
          </span>
          <span className="highlight-primary">MY TOP WORKS</span>
        </>
      ),
      fontSize: { all: '3.8rem', md: '4.8rem' },
    },
    rightTexts: [
      {
        $keyId: crypto.randomUUID(),
        children:
          'My web development projects showcases the exceptional work that I have delivered. Have a look into my portfolio, highlighting the diverse range of web dev projects for various industries.',
      },
    ],
  },
};

export default servicesWork;
