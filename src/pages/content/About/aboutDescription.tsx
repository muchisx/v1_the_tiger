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
      children: 'About me',
      variant: 'tertiary',
    },
  },
  rightContent: {
    rightHeading: {
      children: (
        <>
          A WEB DEVELOPER BALANCING TECH WITH A KEEN EYE FOR DETAILS.
          <br />
          ROOTED IN VISUAL ARTS, I HARMONIZE FORM AND FUNCTION.
        </>
      ),
      fontSize: { all: '2.8rem', sm: '4.8rem' },
    },
    rightTexts: [
      {
        $keyId: crypto.randomUUID(),
        fontWeight: 500,
        children: (
          <>
            I am a Web Developer specializing in Shopify and React, driven by an unwavering commitment to quality.
            Unlike freelancers who prioritize speed paired with low prices at the expense of quality, I believe in
            delivering top-notch solutions that not only meet but exceed client expectations.
            <br />
            <br />
            My unique journey began in the world of Visual Arts, infusing my Front-End development work with an acute
            attention to detail and aesthetics. This background allows me to create visually stunning websites that not
            only function flawlessly but also engage and captivate users.
            <br />
            <br />
            <Link to="https://calendly.com/miguel-angel-creator/free-meeting" target="_blank" rel="noopener noreferrer">
              Book a free meeting call
            </Link>{' '}
            and let&rsquo;s talk about your ideas!
          </>
        ),
      },
      {
        $keyId: crypto.randomUUID(),
        children: (
          <>
            Beyond development, I offer valuable services such as Website Audits and Consultations, empowering companies
            to enhance their online presence strategically. Collaboration and partnership are at the heart of my
            approach. I collaborate closely with clients, maintaining transparency and honesty in every aspect of our
            work, ensuring that the solutions I provide align with their objectives.
            <br />
            <br />
            In a world where cutting corners is all too common, I stand as a firm advocate for excellence. Partner with
            me, and together, we can turn your digital aspirations into realities that not only meet but exceed your
            expectations, while always keeping an eye on quality as our guiding principle.
          </>
        ),
      },
    ],
    rightButtons: [
      {
        $keyId: crypto.randomUUID(),
        buttonRole: 'link',
        to: '/work',
        text: 'Work',
        variant: 'primary',
        Icon: ArrowRight,
      },
      {
        $keyId: crypto.randomUUID(),
        buttonRole: 'link',
        to: '/services',
        text: 'Services',
        variant: 'secondary',
        Icon: ArrowRight,
      },
    ],
  },
};

export default aboutDescription;
