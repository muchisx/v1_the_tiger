/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Dependencies
import { css } from 'styled-components';
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
// Assets
import svgShape from '@assets/svgs/abstract-8.svg';
// Styled Components
import { BackgroundShape } from '@components/SplitContent/SplitContent.styles';
// Types
import { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';
import type { Props as HeadingProps } from '@/components/shared/Heading/Heading.types';

type ContactVariant = 'primary' | 'secondary' | 'tertiary';

const commonStyles = css`
  ${BackgroundShape} {
    top: unset;
    bottom: -16%;

    @media only screen and (min-width: 769px) {
      left: 10%;
      width: min(36%, 560px);
    }
    @media only screen and (max-width: 768px) {
      left: 24%;
    }
  }
`;

const primaryCustomStyles = css`
  ${commonStyles}
`;

const secondaryCustomStyles = css`
  ${commonStyles}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    background-color: var(--body-bg-color-secondary);
  }

  ${BackgroundShape} {
    opacity: 0.2;
    filter: brightness(10);
  }
`;

const tertiaryCustomStyles = css`
  ${commonStyles}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    background-color: var(--body-bg-color-tertiary);
  }

  ${BackgroundShape} {
    z-index: unset;
  }
`;

const commonLeftTopTag: SplitContentProps['leftContent']['topTag'] = {
  variant: 'tertiary',
  children: 'Let us chat',
};

const commonLeftBgShape: SplitContentProps['leftContent']['backgroundShape'] = {
  url: svgShape,
  rotation: [100, 140],
};

const commonRightHeading = (highlightTwo = ''): HeadingProps => {
  return {
    children: (
      <>
        <span className="highlight-primary">GOT AN IDEA?</span>
        <br />
        <span className={highlightTwo}>LET&#39;S WORK TOGETHER!</span>
      </>
    ),
    fontSize: {
      all: '3.8rem',
      md: '4.8rem',
    },
  };
};

const commonRightTextOne = (
  <>
    Reach out to me, and together, we&#39;ll craft a website that outshines the competition, leaving us proud of the
    exceptional results we achieve.
  </>
);

const commonRightButtons: SplitContentProps['rightContent']['rightButtons'] = [
  {
    $keyId: crypto.randomUUID(),
    text: 'Contact',
    buttonRole: 'link',
    to: '/contact',
    variant: 'primary',
    Icon: ArrowRight,
  },
];

const sharedContact = (variant: ContactVariant = 'primary') => {
  let customStyles;
  const leftContent: SplitContentProps['leftContent'] = {
    topTag: commonLeftTopTag,
    backgroundShape: commonLeftBgShape,
  };
  const rightContent: SplitContentProps['rightContent'] = {
    rightHeading: commonRightHeading(),
    rightTexts: [
      {
        $keyId: crypto.randomUUID(),
        children: commonRightTextOne,
      },
    ],
    rightButtons: [...commonRightButtons],
  };

  switch (variant) {
    case 'primary':
      customStyles = primaryCustomStyles;
      break;
    case 'secondary':
      customStyles = secondaryCustomStyles;
      rightContent.rightHeading = commonRightHeading('highlight-quaternary');
      rightContent.rightTexts![0].className = 'highlight-quaternary';
      rightContent.rightButtons![0].variant = 'secondary';
      break;
    case 'tertiary':
      customStyles = tertiaryCustomStyles;
      break;

    default:
      break;
  }

  return {
    customStyles,
    leftContent,
    rightContent,
  };
};

export default sharedContact;
