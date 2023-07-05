import { css } from 'styled-components';
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import type { Props as SplitContentProps } from '../../../components/SplitContent/SplitContent.types';

const customStyles = css`
  @media only screen and (min-wkeyidth: 768px) {
    .split-content__first p:first-of-type {
      text-transform: uppercase;
    }
  }
`;

const textLeft = (
  <>Skilled web developer capitalizing on the potential of coding to accomplish your creative aspirations.</>
);

const textRight = (
  <>
    I use my proficiency in Shopify or React Development and thorough coding practices to create robust digital
    presences for innovative startups and established businesses alike.
  </>
);

const leftContent: SplitContentProps['leftContent'] = {
  leftTexts: [
    {
      keyId: 1,
      fontWeight: 500,
      children: textLeft,
    },
  ],
};

const rightContent: SplitContentProps['rightContent'] = {
  rightTexts: [
    {
      keyId: 1,
      children: textRight,
    },
  ],
  rightButtons: [
    {
      keyId: 1,
      role: 'link',
      newTab: true,
      Icon: ArrowRight,
      variant: 'primary',
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
