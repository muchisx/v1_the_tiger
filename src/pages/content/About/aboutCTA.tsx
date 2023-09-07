// Dependencies
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
// Assets
import svgShape from '@assets/svgs/abstract-8.svg';
// Types
import type { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';

// TODO - change the text, reword more
const textRight = (
  <>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, illo atque numquam nulla maxime magni esse
    culpa voluptatum molestiae quibusdam, corrupti placeat deserunt laboriosam iste! Non quod perspiciatis aspernatur
    autem?
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
      Icon: ArrowRight,
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

const aboutCTA: SplitContentProps = {
  leftContent,
  rightContent,
};

export default aboutCTA;
