/* eslint-disable max-len */
// Types
import { type Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';
import { type Props as AccordionProps } from '@components/shared/Accordion/Accordion.types';

const aboutProcessItems: AccordionProps['accordionItems'] = [
  {
    $keyId: crypto.randomUUID(),
    question: 'Lorem Lorem',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eum facere earum cumque sunt ipsa nihil nostrum sequi officia excepturi blanditiis, quod ullam rerum labore reiciendis laudantium amet dolor est.',
  },
  {
    $keyId: crypto.randomUUID(),
    question: 'Lorem Lorem',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eum facere earum cumque sunt ipsa nihil nostrum sequi officia excepturi blanditiis, quod ullam rerum labore reiciendis laudantium amet dolor est.',
  },
  {
    $keyId: crypto.randomUUID(),
    question: 'LOREM Loooooooorem',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eum facere earum cumque sunt ipsa nihil nostrum sequi officia excepturi blanditiis, quod ullam rerum labore reiciendis laudantium amet dolor est.',
  },
  {
    $keyId: crypto.randomUUID(),
    question: 'Lorem Lorem',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eum facere earum cumque sunt ipsa nihil nostrum sequi officia excepturi blanditiis, quod ullam rerum labore reiciendis laudantium amet dolor est.',
  },
  {
    $keyId: crypto.randomUUID(),
    question: 'Lorem Lorem',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eum facere earum cumque sunt ipsa nihil nostrum sequi officia excepturi blanditiis, quod ullam rerum labore reiciendis laudantium amet dolor est.',
  },
];

const aboutProcess: SplitContentProps = {
  leftContent: {
    topTag: {
      children: 'Process',
      variant: 'tertiary',
    },
  },
  rightContent: {},
};

export { aboutProcessItems };

export default aboutProcess;
