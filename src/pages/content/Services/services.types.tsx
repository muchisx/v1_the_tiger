import { type Props as HeadingProps } from '@components/shared/Heading/Heading.types';
import type { Props as TextProps } from '@components/shared/Text/Text.types';
import type { Props as ButtonProps } from '@components/shared/Button/Button.types';
import type { AccordionItem } from '@components/shared/Accordion/Accordion.types';
// Types
import type { KeyId } from '@/types/general.types';

type ButtonWithKeyIdProps = KeyId & ButtonProps;
type TextWithKeyIdProps = KeyId & TextProps;

export type Service = KeyId & {
  heading: HeadingProps;
  texts: TextWithKeyIdProps[];
  links: ButtonWithKeyIdProps[];
  features: AccordionItem[];
};
