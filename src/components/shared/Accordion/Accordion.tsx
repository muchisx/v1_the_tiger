// Dependencies
import { useState } from 'react';
import { ChevronUpDown } from '@styled-icons/fluentui-system-filled';
import { AnimatePresence } from 'framer-motion';
// Components
import Text from '../Text/Text';
import Heading from '../Heading/Heading';
// Styled Components
import {
  QuestionIcon,
  AccordionList,
  QuestionButton,
  AnswerContainer,
  QuestionContainer,
  AccordionItemContainer,
  AccordionItemMotionVariants,
} from './Accordion.styles';
// Types
import type { AccordionItem as AccordionItemProps, Props } from './Accordion.types';

function AccordionItem(props: AccordionItemProps) {
  const { question, answer } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions

  const wrapAnswerInSpan = typeof answer.children !== 'string';

  return (
    <AccordionItemContainer>
      <QuestionContainer initial={false}>
        <QuestionButton onClick={() => setIsExpanded((previsExpanded) => !previsExpanded)}>
          <Heading fontSize={{ all: '2rem', md: '2.4rem' }} headingLevel="h4" {...question} />

          <QuestionIcon>
            <ChevronUpDown />
          </QuestionIcon>
        </QuestionButton>
      </QuestionContainer>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <AnswerContainer
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={AccordionItemMotionVariants}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Text tag={wrapAnswerInSpan ? 'span' : 'p'} {...answer} />
          </AnswerContainer>
        )}
      </AnimatePresence>
    </AccordionItemContainer>
  );
}

function Accordion(props: Props) {
  const { accordionItems } = props;

  return (
    <AccordionList>
      {accordionItems.map((item) => (
        <AccordionItem key={item.$keyId} $keyId={item.$keyId} answer={item.answer} question={item.question} />
      ))}
    </AccordionList>
  );
}

export { AccordionItem };
export default Accordion;
