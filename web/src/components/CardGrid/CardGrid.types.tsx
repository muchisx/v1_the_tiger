import { type FlattenSimpleInterpolation } from 'styled-components';
import type { Props as SectionProps } from '../shared/Section/Section';
import type { Props as CardProps } from '../Card/Card.types';
import type { Props as ButtonProps } from '../shared/Button/Button.types';
import type { Props as HeadingProps } from '../shared/Heading/Heading.types';

type CardCell = {
  id: number;
  card: CardProps;
  subheading: HeadingProps['text'];
  button?: ButtonProps;
};

export type Props = {
  contain?: SectionProps['contain'];
  customStyles?: FlattenSimpleInterpolation;
  cardCells: CardCell[];
  subheadingFont?: {
    fontSize?: HeadingProps['fontSize'];
    fontWeight?: HeadingProps['fontWeight'];
    headingLevel?: HeadingProps['headingLevel'];
  };
};
