import { type FlattenSimpleInterpolation } from 'styled-components';
import { type Props as ButtonProps } from '../shared/Button/Button.types';
import { type Props as TextProps } from '../shared/Text/Text.types';
import { type Props as HeadingProps } from '../shared/Heading/Heading.types';
import { type ConditionalProps as SectionConditionalProps } from '../shared/Section/Section';
import type { Props as CardProps } from '../Card/Card.types';

type ButtonWithIdProps = { id: number } & ButtonProps;
type TextWithIdProps = { id: number } & TextProps;
type CardWithIdProps = { id: number } & CardProps;

export type Props = {
  leftContent: {
    topButton?: ButtonProps;
    leftHeading?: HeadingProps;
    leftTexts?: TextWithIdProps[];
    maskedImageURL?: string;
    backgroundShapeURL?: string;
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
} & SectionConditionalProps;

export type SubSectionProps = {
  maskedImageURL?: Props['leftContent']['maskedImageURL'];
};
