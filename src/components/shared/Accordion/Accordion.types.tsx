// Types
import type { KeyId } from '@/types/general.types';
import type { Props as TextProps } from '../Text/Text.types';

export type AccordionItem = KeyId & {
  question: string;
  answer: TextProps;
};

export type Props = {
  accordionItems: AccordionItem[];
};
