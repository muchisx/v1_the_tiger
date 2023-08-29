/* eslint-disable max-len */
// Dependencies
import { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
// Utils
import { getMediaQueryValue } from '@utils';
// Styled Components
import HeadingStyled from '@components/shared/Heading/Heading.styles';
import { TextsContainer } from '@components/SplitContent/SplitContent.styles';
// Types
import { type Props as SplitContentProps } from '@/components/SplitContent/SplitContent.types';

const customStyles = css`
  .split-content__first {
    @media only screen and (min-width: ${getMediaQueryValue('md')}) {
      flex: 1 1 24%;
    }
  }

  .split-content__second {
    --gap: 32px;
    gap: var(--gap);

    ${HeadingStyled} {
      line-height: 1.15;
      padding-bottom: var(--gap);
      border-bottom: 1px solid var(--neutral-color-quaternary);
    }
  }

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    .split-content__second {
      --gap: 44px;
      flex: 1 1 76%;

      ${TextsContainer} {
        flex-direction: row;

        > * {
          flex: 1 1 50%;
        }
      }
    }
  }
`;

const aboutDescription: SplitContentProps = {
  customStyles,
  leftContent: {
    topTag: {
      children: 'A handful of words about me',
      variant: 'tertiary',
    },
  },
  rightContent: {
    rightHeading: {
      children:
        'A FREELANCE WEB DEVELOPER DEDICATED TO EMPOWERING FORWARD-THINKING COMPANIES TO UNLOCK THEIR GROWTH POTENTIAL.',
      fontSize: { all: '3.2rem', sm: '4.8rem' },
    },
    rightTexts: [
      {
        $keyId: crypto.randomUUID(),
        children: (
          <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt
            animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.,
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt
            animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.
          </>
        ),
      },
      {
        $keyId: crypto.randomUUID(),
        children: (
          <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt
            animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt
            animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.
            <br />
            <Link to="https://calendly.com/miguel-angel-creator/free-meeting" target="_blank" rel="noopener noreferrer">
              Book a free strategy call
            </Link>{' '}
            and let&rsquo;s talk about your ideas!
          </>
        ),
      },
    ],
    rightButtons: [
      {
        $keyId: crypto.randomUUID(),
        role: 'link',
        to: '/work',
        text: 'Work',
        variant: 'primary',
        Icon: ArrowRight,
      },
      {
        $keyId: crypto.randomUUID(),
        role: 'link',
        to: '/services',
        text: 'Services',
        variant: 'secondary',
        Icon: ArrowRight,
      },
    ],
  },
};

export default aboutDescription;
