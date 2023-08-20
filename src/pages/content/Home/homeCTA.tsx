// Dependencies
import { css } from 'styled-components';
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
// Utils
import { getMediaQueryValue } from '@utils';
// Types
import type { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';
import backgroundshape from '@assets/svgs/abstract-1.svg';

const customStyles = css`
  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    .split-content__first p:first-of-type {
      text-transform: uppercase;
    }
  }
`;

// const textLeft = (
//   <>Skilled web developer capitalizing on the potential of coding to accomplish your creative aspirations.</>
// );

const textRight = (
  <>
    I use my proficiency in Shopify or React Development and thorough coding practices to create robust digital
    presences for innovative startups and established businesses alike.
  </>
);

// const leftContent: SplitContentProps['leftContent'] = {
//   leftTexts: [
//     {
//       fontWeight: 500,
//       children: textLeft,
//       $keyId: crypto.randomUUID(),
//     },
//   ],
// };
const leftContent: SplitContentProps['leftContent'] = {
  backgroundShape: {
    url: backgroundshape,
  },
};

const rightContent: SplitContentProps['rightContent'] = {
  rightTexts: [
    {
      children: textRight,
      $keyId: crypto.randomUUID(),
    },
  ],
  rightButtons: [
    {
      newTab: true,
      role: 'link',
      Icon: ArrowRight,
      variant: 'primary',
      $keyId: crypto.randomUUID(),
      text: 'Reserve a free meeting',
      to: 'https://calendly.com/miguel-angel-creator/free-meeting',
    },
  ],
};

const homeCTA: SplitContentProps = {
  leftContent,
  rightContent,
  customStyles,
};

export default homeCTA;
