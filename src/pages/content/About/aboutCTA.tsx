// Dependencies
import { css } from 'styled-components';
import { ArrowRight, CalendarLtr } from '@styled-icons/fluentui-system-filled';
// Styled components
import { BackgroundShape } from '@components/SplitContent/SplitContent.styles';
// Assets
import svgShape from '@assets/svgs/abstract-8.svg';
// Utils
import { getMediaQueryValue } from '@utils';
// Types
import type { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';
import { EXTERNAL_URL } from '@constants/urls';

const customStyles = css`
  @media only screen and (min-width: ${getMediaQueryValue('all')}) {
    padding-top: 0px;
    padding-bottom: 80px;
  }
  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    padding-top: 20px;
    padding-bottom: 120px;
  }

  ${BackgroundShape} {
    @media only screen and (max-width: 768px) {
      top: unset;
      left: unset;
      right: -24%;
      bottom: 12%;
      width: 56%;
    }

    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      top: 50%;
      left: 8%;
      width: 40%;
    }
  }
`;

const textRight = (
  <>
    Crafting web experiences that captivate and convert is my forte. With a portfolio spanning
    diverse industries, I&rsquo;ve honed my skills to create websites that not only look stunning
    but also function flawlessly. I thrive on turning your vision into a digital reality, ensuring
    each element is pixel-perfect and every interaction is intuitive.
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
      to: EXTERNAL_URL.scheduler,
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
  customStyles,
  leftContent,
  rightContent,
};

export default aboutCTA;
