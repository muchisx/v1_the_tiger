// Components
import Section from '../components/shared/Section/Section';
import Heading from '../components/shared/Heading/Heading';
import SplitContent from '../components/SplitContent/SplitContent';
import CardGrid from '../components/CardGrid/CardGrid';
// Content
import { WorkHeroHeadingText, workCTA, workJobCards, workContact } from './content/Work';

function Work() {
  return (
    <main className="page page--work">
      <Section enableGutter>
        <Heading text={WorkHeroHeadingText} headingLevel="h1" fontSize="4vw" />
      </Section>
      <SplitContent contain leftContent={workCTA.leftContent} rightContent={workCTA.rightContent} />
      <CardGrid cardCells={workJobCards.cardCells} contain customStyles={workJobCards.customStyles} />
      <SplitContent
        leftContent={workContact.leftContent}
        rightContent={workContact.rightContent}
        customStyles={workContact.customStyles}
        contain="padding"
      />
    </main>
  );
}

export default Work;
