import { type FlattenSimpleInterpolation } from 'styled-components';
import { type Props as ButtonProps } from '../shared/Button/Button.types';
import { type Props as TextProps } from '../shared/Text/Text.types';
import { type Props as HeadingProps } from '../shared/Heading/Heading.types';
import { type Props as SectionProps } from '../shared/Section/Section';
import type { Props as CardProps } from '../Card/Card.types';

type ButtonWithIdProps = { id: number } & ButtonProps;
type TextWithIdProps = { id: number } & TextProps;
type CardWithIdProps = { id: number } & CardProps;

export type BackgroundShape = {
  url: string;

  // Start position, end position
  rotation?: [number, number];
};

export type Props = {
  leftContent: {
    topButton?: ButtonProps;
    leftHeading?: HeadingProps;
    leftTexts?: TextWithIdProps[];
    maskedImageURL?: string;
    backgroundShape?: BackgroundShape;
    buttonsLabel?: string;
    leftButtons?: ButtonWithIdProps[];
  };
  rightContent: {
    rightHeading?: HeadingProps;
    rightTexts?: TextWithIdProps[];
    rightButtons?: ButtonWithIdProps[];
    cards?: CardWithIdProps[];
  };
  customStyles?: FlattenSimpleInterpolation;
  contain?: SectionProps['contain'];
};

export type SubSectionProps = {
  maskedImageURL?: Props['leftContent']['maskedImageURL'];
};
