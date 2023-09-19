// Types
import type { KeyId } from '@/types/general.types';
import type { Props as TextProps } from '../Text/Text.types';
import type { Props as HeadingProps } from '../Heading/Heading.types';

export type AccordionItem = KeyId & {
  question: HeadingProps;
  answer: TextProps;
};

export type Props = {
  accordionItems: AccordionItem[];
};
