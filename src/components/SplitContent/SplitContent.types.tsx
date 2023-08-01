// Dependencies
import { type ReactNode } from 'react';
// Types
import { Props as TagProps } from '@components/shared/Tag/Tag';
import { type FlattenSimpleInterpolation } from 'styled-components';
import type { Props as CardProps } from '@components/Card/Card.types';
import { type Props as TextProps } from '@components/shared/Text/Text.types';
import { type Props as SectionProps } from '@components/shared/Section/Section';
import { type Props as ButtonProps } from '@components/shared/Button/Button.types';
import { type Props as HeadingProps } from '@components/shared/Heading/Heading.types';
import type { KeyId } from '@/types/general.types';

type ButtonWithKeyIdProps = KeyId & ButtonProps;
type TextWithKeyIdProps = KeyId & TextProps;
type CardWithKeyIdProps = KeyId & CardProps;

export type BackgroundShape = {
  url: string;

  // Start position, end position
  rotation?: [number, number];
};

export type Props = {
  leftContent: {
    topTag?: TagProps;
    leftHeading?: HeadingProps;
    leftTexts?: TextWithKeyIdProps[];
    maskedImageURL?: string;
    backgroundShape?: BackgroundShape;
    buttonsLabel?: string;
    leftButtons?: ButtonWithKeyIdProps[];
  };
  rightContent: {
    rightHeading?: HeadingProps;
    rightTexts?: TextWithKeyIdProps[];
    rightButtons?: ButtonWithKeyIdProps[];
    cards?: CardWithKeyIdProps[];
  };
  children?: JSX.Element | JSX.Element[];
  customStyles?: FlattenSimpleInterpolation;
  contain?: SectionProps['contain'];
};

export type SubSectionProps = {
  maskedImageURL?: Props['leftContent']['maskedImageURL'];
};

export type SplitContentCustomProps = {
  children: ReactNode;
  location: 'first' | 'second';
};
