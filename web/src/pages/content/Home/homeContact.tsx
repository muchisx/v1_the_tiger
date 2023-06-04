import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import { Props as SplitContentProps } from '../../../components/SplitContent/SplitContent.types';
import svgShape from '../../../assets/svgs/abstract-8.svg';

const leftContent: SplitContentProps['leftContent'] = {
  topButton: {
    role: 'link',
    to: '/contact',
    variant: 'tertiary',
    text: 'Get in touch',
  },
  backgroundShape: {
    url: svgShape,
    rotation: [100, 140],
  },
};

const textOne = (
  <>
    Don&#39;t put your creativity on hold and let&#39;s build a professional web experience which will put you above
    your competitors.
  </>
);

const rightHeading = (
  <>
    <span className="highlight-primary">GOT AN IDEA?</span>
    <br />
    <span>LET&#39;S WORK TOGETHER!</span>
  </>
);

const rightContent: SplitContentProps['rightContent'] = {
  rightHeading: {
    text: rightHeading,
    fontSize: '4.8rem',
  },
  rightTexts: [
    {
      id: 1,
      children: textOne,
    },
  ],
  rightButtons: [
    {
      id: 1,
      text: 'Contact',
      role: 'link',
      to: '/contact',
      variant: 'primary',
      Icon: ArrowRight,
    },
  ],
};

const homeContact = {
  leftContent,
  rightContent,
};

export default homeContact;
