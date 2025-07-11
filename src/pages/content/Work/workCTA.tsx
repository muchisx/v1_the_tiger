// Dependencies
import { css } from 'styled-components';
import { ArrowRight, CalendarLtr, LockClosed } from '@styled-icons/fluentui-system-filled';
// Styled Components
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
      top: 40%;
      left: 8%;
      width: 40%;
    }
  }
`;

// TODO - change the text
const textRight = (
  <>
    I take pride in presenting my projects that exemplify the outstanding work I have accomplished.
    Explore my portfolio to discover a wide array of projects spanning across different industries.
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        fontSize: '1.4rem',
        marginTop: '1.6rem',
      }}
    >
      <LockClosed size="1.4rem" /> Due to confidentiality, only a limited selection can be shared
      here.
    </span>
  </>
);

// TODO - Put different svg shape
const leftContent: SplitContentProps['leftContent'] = {
  backgroundShape: {
    url: svgShape,
    rotation: [20, 60],
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
      text: 'Services',
      to: '/services',
    },
  ],
};

const workCTA: SplitContentProps = {
  customStyles,
  leftContent,
  rightContent,
};

export default workCTA;
