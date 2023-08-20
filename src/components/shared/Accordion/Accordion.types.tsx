import type { KeyId } from '@/types/general.types';

export type AccordionItem = KeyId & {
  question: string;
  answer: string;
};

export type Props = {
  accordionItems: AccordionItem[];
};
