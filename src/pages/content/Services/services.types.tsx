import { type Props as HeadingProps } from '@/components/shared/Heading/Heading.types';
import type { KeyId } from '@/types/general.types';
import type { Props as TextProps } from '@/components/shared/Text/Text.types';
import type { Props as ButtonProps } from '@/components/shared/Button/Button.types';

type ButtonWithKeyIdProps = KeyId & ButtonProps;
type TextWithKeyIdProps = KeyId & TextProps;

export type Service = KeyId & {
  heading: HeadingProps;
  texts: TextWithKeyIdProps[];
  links: ButtonWithKeyIdProps[];
};
