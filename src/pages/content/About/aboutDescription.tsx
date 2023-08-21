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
            I am not just about creating visually stunning websites – I am about creating digital experiences that
            leaves a lasting first impression. I am a young digital designer who takes work seriously, but I also
            believe that work should be fun. That&rsquo;s why I inject a little bit of humor into every project I do.
            <br />
            <br />I believe that laughter and creativity go hand-in-hand, and that mindset helps me push boundaries and
            deliver truly exceptional designs. I also believe that no two businesses are alike, and therefore, no two
            websites should look too similar to each other.
          </>
        ),
      },
      {
        $keyId: crypto.randomUUID(),
        children: (
          <>
            That&rsquo;s why I take a customised approach to every project I work on. I get to know your brand&rsquo;s
            personality and your business&rsquo;s unique needs before crafting a design that perfectly fits your vision.
            Whether you&rsquo;re a startup or an established business, I&rsquo;ll create a website that captures the
            essence of your brand and helps you stand out in the crowded digital landscape.
            <br />
            <br />
            So, if you&rsquo;re looking for a web designer who takes your business seriously, but also having fun, I am
            that person.{' '}
            <Link to="https://calendly.com/miguel-angel-creator/free-meeting" target="_blank" rel="noopener noreferrer">
              Book a free strategy call
            </Link>{' '}
            and let&rsquo;s talk about you business!
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
