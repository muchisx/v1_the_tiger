// Components
import Section from '@components/shared/Section/Section';
import Heading from '@components/shared/Heading/Heading';
import SplitContent from '@components/SplitContent/SplitContent';
import CardGrid from '@components/CardGrid/CardGrid';
// Content
import { WorkHeroHeadingText, workCTA, workJobCards } from '@content/Work';
import sharedContact from '@content/shared/sharedContact';

const workContact = sharedContact('secondary');

function Work() {
  return (
    <main className="page page--work">
      <Section enableGutter>
        <Heading headingLevel="h1" fontSize={{ all: '4vw' }}>
          {WorkHeroHeadingText}
        </Heading>
      </Section>
      <SplitContent contain leftContent={workCTA.leftContent} rightContent={workCTA.rightContent} />
      <CardGrid cardCells={workJobCards.cardCells} contain customStyles={workJobCards.customStyles} />
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
