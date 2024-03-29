// Components
import Section from '@components/shared/Section/Section';
import Heading from '@components/shared/Heading/Heading';
import SplitContent from '@components/SplitContent/SplitContent';
import CardGrid from '@components/CardGrid/CardGrid';
// Utils
import getFixedCSSvw from '@utils/getFixedCSSvw';
// Content
import { WorkHeroHeadingText, workCTA, workJobCards, workJobsHeading } from '@content/Work';
import sharedContact from '@content/shared/sharedContact';

const workContact = sharedContact('secondary');

function Work() {
  return (
    <main className="page page--work">
      <Section enableGutter>
        <Heading headingLevel="h1" fontSize={{ all: getFixedCSSvw(4) }}>
          {WorkHeroHeadingText}
        </Heading>
      </Section>
      <SplitContent
        contain
        leftContent={workCTA.leftContent}
        rightContent={workCTA.rightContent}
        customStyles={workCTA.customStyles}
      />

      <SplitContent
        contain
        leftContent={workJobsHeading.leftContent}
        rightContent={workJobsHeading.rightContent}
        customStyles={workJobsHeading.customStyles}
      />

      <CardGrid
        cardCells={workJobCards.cardCells}
        contain
        customStyles={workJobCards.customStyles}
        subheadingFont={workJobCards.subheadingFont}
      />
      <SplitContent
        contain="padding"
        leftContent={workContact.leftContent}
        rightContent={workContact.rightContent}
        customStyles={workContact.customStyles}
      />
    </main>
  );
}

export default Work;
