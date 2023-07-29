// Dependencies
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
// Assets
import svgShape from '@assets/svgs/abstract-8.svg';
// Types
import type { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';

// TODO - change the text
const textRight = (
  <>
    I take pride in presenting my projects that exemplify the outstanding work I have accomplished. Explore my portfolio
    to discover a wide array of projects spanning across different industries. Due to confidentiality, only a limited
    selection can be shared here.
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
      role: 'link',
      newTab: true,
      Icon: ArrowRight,
      variant: 'primary',
      text: 'Reserve a free meeting',
      to: 'https://calendly.com/miguel-angel-creator/free-meeting',
    },
    {
      $keyId: crypto.randomUUID(),
      role: 'link',
      Icon: ArrowRight,
      variant: 'secondary',
      text: 'Services',
      to: '/services',
    },
  ],
};

const workCTA: SplitContentProps = {
  leftContent,
  rightContent,
};

export default workCTA;
