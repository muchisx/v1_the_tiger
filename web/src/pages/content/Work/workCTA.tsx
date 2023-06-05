import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import type { Props as SplitContentProps } from '../../../components/SplitContent/SplitContent.types';
import svgShape from '../../../assets/svgs/abstract-8.svg';

// TODO - change the text
const textRight = (
  <>
    My projects showcases the exceptional work that I have delivered. Have a look into my portfolio, highlighting the
    diverse range of projects for various industries. Most of my works are white labeled which means I can only share
    here a few.
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
      id: 1,
      children: textRight,
    },
  ],
  rightButtons: [
    {
      id: 1,
      role: 'link',
      newTab: true,
      Icon: ArrowRight,
      variant: 'primary',
      text: 'Reserve a free meeting',
      to: 'https://calendly.com/miguel-angel-creator/free-meeting',
    },
    {
      id: 2,
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
