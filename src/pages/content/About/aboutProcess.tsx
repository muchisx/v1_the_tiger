/* eslint-disable max-len */
// Types
import { type Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';
import { type Props as AccordionProps } from '@components/shared/Accordion/Accordion.types';
import { css } from 'styled-components';

const customStyles = css`
  @media only screen and (max-width: 768px) {
    gap: 4rem;
  }
`;

const aboutProcessItems: AccordionProps['accordionItems'] = [
  {
    $keyId: crypto.randomUUID(),
    question: {
      fontSize: { all: '2rem' },
      children: 'Strategy and Planning',
    },
    answer: {
      children:
        '💡 We will spend some time together knowing each other and our goals. We will collaborate closely to craft strategies that align with your vision, ensuring a solid foundation for your journey to success.',
    },
  },
  {
    $keyId: crypto.randomUUID(),
    question: {
      fontSize: { all: '2rem' },
      children: 'Development',
    },
    answer: {
      children:
        '👨🏻‍💻 I will grab my coffee and dive into your project. I bring your vision to life, balancing function and aesthetics with meticulous care for a user-friendly experience.',
    },
  },
  {
    $keyId: crypto.randomUUID(),
    question: {
      fontSize: { all: '2rem' },
      children: 'Quality Assurance and Testing',
    },
    answer: {
      children:
        "🔬 No stone will be left unturned. My rigorous testing guarantees peak performance, security, and an outstanding user experience for your project's success.",
    },
  },
  {
    $keyId: crypto.randomUUID(),
    question: {
      fontSize: { all: '2rem' },
      children: 'Launch and Optimization',
    },
    answer: {
      children:
        '🍾 I will bring the champagne as I carefuly ensure a smooth launch for your project. Post-launch, I focus on continuous optimization, ensuring your online presence evolves effectively, adapting to changing needs.',
    },
  },
  {
    $keyId: crypto.randomUUID(),
    question: {
      fontSize: { all: '2rem' },
      children: 'Ongoing support',
    },
    answer: {
      children:
        "🔔 Our collaboration doesn't end when the project is launched. I will be there for anything you need moving forward, whether it be a new feature, a bug fix, or a new service. I will have your back.",
    },
  },
];

const aboutProcess: SplitContentProps = {
  customStyles,
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
