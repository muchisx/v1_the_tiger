// Dependencies
import { type FlattenSimpleInterpolation } from 'styled-components';
// Types
import type { Props as CardProps } from '@components/Card/Card.types';
import type { Props as SectionProps } from '@components/shared/Section/Section';
import type { Props as ButtonProps } from '@components/shared/Button/Button.types';
import type { Props as HeadingProps } from '@components/shared/Heading/Heading.types';
import { type KeyId } from '@/types/general.types';
import type { MediaQueryWithCSS } from '@/types/mediaQuery.types';

type CardCell = KeyId & {
  card: CardProps;
  subheading: HeadingProps['children'];
  button?: ButtonProps;
};

export type CardGridStyledProps = {
  $gridTemplateColumns?: Props['gridTemplateColumns'];
  $gridAutoRows?: Props['gridAutoRows'];
};

export type Props = {
  contain?: SectionProps['contain'];
  customStyles?: FlattenSimpleInterpolation;
  cardCells: CardCell[];
  gridTemplateColumns?: MediaQueryWithCSS<string>;
  gridAutoRows?: MediaQueryWithCSS<string>;
  subheadingFont?: {
    fontSize?: HeadingProps['fontSize'];
    fontWeight?: HeadingProps['fontWeight'];
    headingLevel?: HeadingProps['headingLevel'];
  };
  footerButton?: ButtonProps;
};
