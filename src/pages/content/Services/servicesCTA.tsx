// Dependencies
import { ArrowRight, CalendarLtr } from '@styled-icons/fluentui-system-filled';
// Assets
import svgShape from '@assets/svgs/abstract-8.svg';
// Types
import type { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';

// TODO - change the text, reword more
const textRight = (
  <>
    Developing a website is not just about creating a visually appealing page, it&#39;s about harnessing the power of
    code to achieve specific goals. A great website should not only look good, but also perform well and meet the needs
    of both the business and its customers.
  </>
);

// TODO - Put different svg shape
const leftContent: SplitContentProps['leftContent'] = {
  backgroundShape: {
    url: svgShape,
    rotation: [0, 45],
  },
};

const rightContent: SplitContentProps['rightContent'] = {
  rightTexts: [
    {
      $keyId: crypto.randomUUID(),
      children: textRight,
    },
  ],
  rightButtons: [
    {
      $keyId: crypto.randomUUID(),
      buttonRole: 'link',
      newTab: true,
      Icon: CalendarLtr,
      variant: 'primary',
      text: 'Reserve a free meeting',
      to: 'https://calendly.com/miguel-angel-creator/free-meeting',
    },
    {
      $keyId: crypto.randomUUID(),
      buttonRole: 'link',
      Icon: ArrowRight,
      variant: 'secondary',
      text: 'Work',
      to: '/work',
    },
  ],
};

const servicesCTA: SplitContentProps = {
  leftContent,
  rightContent,
};

export default servicesCTA;
