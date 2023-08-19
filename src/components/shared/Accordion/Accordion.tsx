import * as React from 'react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  AccordionList,
  QuestionButton,
  AnswerContainer,
  QuestionContainer,
  AccordionItemContainer,
  AccordionItemMotionVariants,
} from './Accordion.styles';
import Text from '../Text/Text';

function AccordionItem(props) {
  const { question, answer } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <AccordionItemContainer>
      <QuestionContainer initial={false}>
        <QuestionButton onClick={() => setIsExpanded((previsExpanded) => !previsExpanded)}>Question +</QuestionButton>
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
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, id debitis, suscipit laboriosam esse
              tempore excepturi ad inventore cum, totam quas. Maiores illum minima eligendi modi quae recusandae
              molestiae pariatur.
            </Text>
          </AnswerContainer>
        )}
      </AnimatePresence>
    </AccordionItemContainer>
  );
}

function Accordion(props) {
  return (
    <AccordionList>
      <AccordionItem />
      <AccordionItem />
      <AccordionItem />
    </AccordionList>
  );
}

export { AccordionItem };
export default Accordion;
