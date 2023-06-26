import { type FlattenSimpleInterpolation } from 'styled-components';
import type { Props as SectionProps } from '../shared/Section/Section';
import type { Props as CardProps } from '../Card/Card.types';
import type { Props as ButtonProps } from '../shared/Button/Button.types';
import type { Props as HeadingProps } from '../shared/Heading/Heading.types';
import type { MediaQueryWithCSS } from '../../types/media.types';

type CardCell = {
  id: number;
  card: CardProps;
  subheading: HeadingProps['text'];
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
};
