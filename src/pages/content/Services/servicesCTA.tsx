// Dependencies
import { css } from 'styled-components';
import { ArrowRight, CalendarLtr } from '@styled-icons/fluentui-system-filled';
// Components
import Text from '@components/shared/Text/Text';
// Styled Componets
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
    <Text tag="span" style={{ display: 'block', marginBottom: '1.5rem' }}>
      Great products are built through a combination of thoughtful design, reliable engineering, and
      strong collaboration. These principles guide every project I take on.
    </Text>

    <Text tag="span" style={{ display: 'block', marginBottom: '1.5rem' }}>
      Specializing in Shopify, React, and AI-powered solutions, I focus on creating digital
      experiences that are scalable, maintainable, and enjoyable to use.
    </Text>

    <Text tag="span">
      My goal is simple: deliver work that creates meaningful business value and stands the test of
      time.
    </Text>
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

const servicesCTA: SplitContentProps = {
  customStyles,
  leftContent,
  rightContent,
};

export default servicesCTA;
