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

// TODO - change the text, reword more
const textRight = (
  <>
    <Text tag="span" style={{ display: 'block', marginBottom: '1.5rem' }}>
      When seeking development services, it&rsquo;s crucial to consider various factors that ensure a successful
      collaboration. These factors include the quality of the code, the developer&rsquo;s integrity, transparency, and
      reliability.
    </Text>
    <Text tag="span" style={{ display: 'block', marginBottom: '1.5rem' }}>
      Unfortunately, many freelance developers prioritize speed and rock-bottom prices, resulting in subpar products
      that can lead to future headaches. I take a different approach. I prioritize quality and client satisfaction above
      all else.
    </Text>
    <Text tag="span">
      By partnering with me, you can expect excellence in every aspect of our work, and together, we&rsquo;ll achieve
      results we&rsquo;ll be proud of.
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
  customStyles,
  leftContent,
  rightContent,
};

export default servicesCTA;
